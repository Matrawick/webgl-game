/* GLOBAL CONSTANTS AND VARIABLES */

/* assignment specific globals */
const WIN_Z = 0;  // default graphics window z coord in world space
const WIN_LEFT = 0; const WIN_RIGHT = 1;  // default left and right x coords in world space
const WIN_BOTTOM = 0; const WIN_TOP = 1;  // default top and bottom y coords in world space
const INPUT_TRIANGLES_URL = "https://ncsucgclass.github.io/prog3/triangles.json"; // triangles file loc
const INPUT_SPHERES_URL = "https://ncsucgclass.github.io/prog3/spheres.json"; // spheres file loc
const FOVY = Math.PI / 2.0;
const CANVAS_HEIGHT = 512;
const CANVAS_WIDTH = 512;
const ASPECT_RATIO = CANVAS_HEIGHT / CANVAS_WIDTH;
var eye = new vec3.fromValues(0.5, 0.5, -0.5); // default eye position in world space
var lookAtPoint = new vec3.fromValues(0.5, 0.5, 0);
var lookUpVec = new vec3.fromValues(0,1,0);
var xViewVector = new vec3.fromValues(1, 0, 0);
var lookAtVector = vec3.create();
vec3.subtract(lookAtVector, lookAtPoint, eye);
vec3.normalize(lookAtVector, lookAtVector);
var PLAYER = 11;        // The index in the inputTriangles that the player controlled shape is.
var DELTA_MOV = 0.01;
var NORTH = 0;
var EAST = 1;
var SOUTH = 2;
var WEST = 3;
var BULLET_START_INDEX = 15;
var BULLET_STOP_INDEX = 22;


/* globals for interacting with objects */
var selectedSet = -1;
var usePerspective = true;
var translationVec = vec3.fromValues(0, 0, 0);
var deltaXRotate = 0;
var deltaYRotate = 0;
var deltaZRotate = 0;
var deltaXScale = 1;


/* webgl globals */
var gl = null;              // the all powerful gl object. It's all here folks!
var vertexBuffer = [];      // this contains vertex coordinates in triples
var triangleBuffer = [];    // this contains indices into vertexBuffer in triples
var vertAmbientBuffer = [];   // this contains the colors of each vertex.
var triBufferSize;          // the number of indices in the triangle buffer
var altPosition;            // flag indicating whether to alter vertex positions
var transUniform;
var projUniform;
var invTransUniform;
var nUniform;
var ambientVecUniform;
var diffuseVecUniform;
var specularVecUniform;
var vertexPositionAttrib;   // where to put position for vertex shader
var vertexAmbientAttrib;      // what to color vertices for vertex shader
var altPositionUniform;     // where to put altPosition flag for vertex shader

var vertNormalBuffer = [];
var vertexNormalAttrib;
var lightPosUniform;

var inputTriangles;
var robotIndices = [];
var availBullets = [];

/* input globals */
var numTriangleSets = 0; // the number of sets of triangles
var triSetSizes = []; // the number of triangles in each set

// ASSIGNMENT HELPER FUNCTIONS

// get the JSON file from the passed URL
function getJSONFile(url,descr) {
    try {
        if ((typeof(url) !== "string") || (typeof(descr) !== "string"))
            throw "getJSONFile: parameter not a string";
        else {
            var httpReq = new XMLHttpRequest(); // a new http request
            httpReq.open("GET",url,false); // init the request
            httpReq.send(null); // send the request
            var startTime = Date.now();
            while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
                if ((Date.now()-startTime) > 3000)
                    break;
            } // until its loaded or we time out after three seconds
            if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE))
                throw "Unable to open "+descr+" file!";
            else
                return JSON.parse(httpReq.response);
        } // end if good params
    } // end try

    catch(e) {
        console.log(e);
        return(String.null);
    }
} // end get input spheres

// set up the webGL environment
function setupWebGL() {

    // Get the canvas and context
    var canvas = document.getElementById("myWebGLCanvas"); // create a js canvas
    gl = canvas.getContext("webgl"); // get a webgl object from it

    try {
      if (gl == null) {
        throw "unable to create gl context -- is your browser gl ready?";
      } else {
        gl.clearColor(0.0, 0.0, 0.0, 1.0); // use black when we clear the frame buffer
        gl.clearDepth(1.0);                // use max when we clear the depth buffer
        gl.enable(gl.DEPTH_TEST);          // use hidden surface removal (with zbuffering)
      }
    } // end try

    catch(e) {
      console.log(e);
    } // end catch

} // end setupWebGL

function loadSingleTriangle( index ) {
  var whichSetVert;    // index of vertex in current triangle set
  var whichSetTri;     // index of triangle in current triangle set
  var vertices;
  var triToAdd;
  var normal;

  numTriangleSets = inputTriangles.length;
  // set up the vertex coord array
  inputTriangles[index].coordArray = []; // 1D array of vertex coords for WebGL
  inputTriangles[index].normalArray = [];
  inputTriangles[index].centerVec = [0, 0, 0];
  for (whichSetVert=0; whichSetVert<inputTriangles[index].vertices.length; whichSetVert++ ) {
      vertices = inputTriangles[index].vertices[whichSetVert];
      normal = inputTriangles[index].normals[whichSetVert];
      inputTriangles[index].coordArray.push(vertices[0], vertices[1], vertices[2]);
      inputTriangles[index].normalArray.push(normal[0],normal[1], normal[2]);
      inputTriangles[index].centerVec[0] += vertices[0];
      inputTriangles[index].centerVec[1] += vertices[1];
      inputTriangles[index].centerVec[2] += vertices[2];
  } // End for vertices in set.
  for ( var i = 0; i < inputTriangles[index].centerVec.length; i++ ) {
      inputTriangles[index].centerVec[i] = inputTriangles[index].centerVec[i] / inputTriangles[index].vertices.length;
  }
  //console.log("coordArray" + inputTriangles[index].coordArray.toString() );

  // Initialize the transformation object
  inputTriangles[index].transVec =  vec3.fromValues( inputTriangles[index].jtransVec[0],
                                                         inputTriangles[index].jtransVec[1],
                                                         inputTriangles[index].jtransVec[2] );



  // Send the vertex coordinates to webGL
  vertexBuffer[index] = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer[index]);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(inputTriangles[index].coordArray),gl.STATIC_DRAW);

  vertNormalBuffer[index] = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertNormalBuffer[index]);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(inputTriangles[index].normalArray), gl.STATIC_DRAW);

  // set up the triangle index array.
  inputTriangles[index].indexArray = [];
  triSetSizes[index] = inputTriangles[index].triangles.length;
  for ( whichSetTri = 0; whichSetTri < triSetSizes[index]; whichSetTri++ ) {
      triToAdd = inputTriangles[index].triangles[whichSetTri];
      inputTriangles[index].indexArray.push(triToAdd[0], triToAdd[1], triToAdd[2]);
  }

  // send the triangle indices to webGL
  triangleBuffer[index] = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, triangleBuffer[index]);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array( inputTriangles[index].indexArray), gl.STATIC_DRAW );
}

// read triangles in, load them into webgl buffers
function loadTriangles() {
    inputTriangles = JSON.parse(JSON.stringify(inputs)); // getJSONFile(INPUT_TRIANGLES_URL, "triangles");
    if (inputTriangles != String.null) {
      var whichSetVert;    // index of vertex in current triangle set
      var whichSetTri;     // index of triangle in current triangle set
      var vertices;
      var triToAdd;
      var normal;

      numTriangleSets = inputTriangles.length;
      for (var whichSet=0; whichSet<inputTriangles.length; whichSet++) {
        loadSingleTriangle( whichSet );
      }
      // Initialize some values
      inputTriangles[PLAYER].updateX = 0;
      inputTriangles[PLAYER].updateY = 0;
      robotIndices.push(12);
      robotIndices.push(13);
      robotIndices.push(14);
      //inputTriangles[12].counter = 0;
      inputTriangles[BULLET_START_INDEX].isIdle = true;
      inputTriangles[PLAYER].isDead = false;
      inputTriangles[PLAYER].facing = WEST;

      inputTriangles[PLAYER + 1].isDead = false;
      inputTriangles[PLAYER + 2].isDead = false;
      inputTriangles[PLAYER + 3].isDead = false;
      for (var t = BULLET_START_INDEX; t <= BULLET_STOP_INDEX; t++ ) {
        availBullets.push(t);
      }
    } // end if triangles found
} // end load triangles

// setup the webGL shaders
function setupShaders() {

    // define fragment shader in essl using es6 template strings
    var fShaderCode = `
        precision mediump float;
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform vec3 lightPosition;
        uniform vec3 ambientVec;
        uniform vec3 diffuseVec;
        uniform vec3 specularVec;
        uniform float nPower;

        void main(void) {
            vec3 eyeVec = normalize(-vPosition);
            vec3 lightVec = normalize(lightPosition - vPosition);
            vec3 normalizedNorm = normalize(vNormal);
            float nDotL = dot(normalizedNorm, lightVec);
            if (nDotL > 0.0) {
              // relected vector is view - (2 * view.N)N;
              vec3 halfVec = normalize( eyeVec + lightVec );
              gl_FragColor = vec4(ambientVec + (diffuseVec * nDotL) + (specularVec * pow( dot(normalizedNorm, halfVec), nPower)), 1.0);
            }
            else {
                gl_FragColor = vec4(ambientVec, 1.0);
            }

        }
    `;

    // define vertex shader in essl using es6 template strings
    var vShaderCode = `
        attribute vec3 vertexPosition;
        attribute vec3 aVertexNormal;

        varying vec3 vNormal;
        varying vec3 vPosition;

        uniform bool altPosition;
        uniform mat4 trans;
        uniform mat3 invTrans;
        //uniform mat4 proj;

        void main(void) {
            //vec4 holder = vec4( aVertexNormal, 1.0);
            //vec4 holder = invTrans * vec4( aVertexNormal, 0);
            //vNormal = aVertexNormal;
            vNormal  = invTrans * aVertexNormal; //vec3(holder.x, holder.y, holder.z);
            vPosition = vertexPosition;
            //if(altPosition)
                //gl_Position = vec4(vertexPosition, 1.0)  + vec4(-1.0, -1.0, 0.0, 0.0); // use the altered position
            //else
                gl_Position = trans * vec4(vertexPosition, 1.0); // Apply projection and view transform
                //gl_Position = vertexPosition;
        }
    `;

    try {
        // console.log("fragment shader: "+fShaderCode);
        var fShader = gl.createShader(gl.FRAGMENT_SHADER); // create frag shader
        gl.shaderSource(fShader,fShaderCode); // attach code to shader
        gl.compileShader(fShader); // compile the code for gpu execution

        // console.log("vertex shader: "+vShaderCode);
        var vShader = gl.createShader(gl.VERTEX_SHADER); // create vertex shader
        gl.shaderSource(vShader,vShaderCode); // attach code to shader
        gl.compileShader(vShader); // compile the code for gpu execution

        if (!gl.getShaderParameter(fShader, gl.COMPILE_STATUS)) { // bad frag shader compile
            throw "error during fragment shader compile: " + gl.getShaderInfoLog(fShader);
            gl.deleteShader(fShader);
        } else if (!gl.getShaderParameter(vShader, gl.COMPILE_STATUS)) { // bad vertex shader compile
            throw "error during vertex shader compile: " + gl.getShaderInfoLog(vShader);
            gl.deleteShader(vShader);
        } else { // no compile errors
            var shaderProgram = gl.createProgram(); // create the single shader program
            gl.attachShader(shaderProgram, fShader); // put frag shader in program
            gl.attachShader(shaderProgram, vShader); // put vertex shader in program
            gl.linkProgram(shaderProgram); // link program into gl context

            if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) { // bad program link
                throw "error during shader program linking: " + gl.getProgramInfoLog(shaderProgram);
            } else { // no shader program link errors
                gl.useProgram(shaderProgram); // activate shader program (frag and vert)
                vertexPositionAttrib = // get pointer to vertex shader input
                    gl.getAttribLocation(shaderProgram, "vertexPosition");
                gl.enableVertexAttribArray(vertexPositionAttrib); // input to shader from array
                altPositionUniform = // get pointer to altPosition flag
                    gl.getUniformLocation(shaderProgram, "altPosition");

                vertexNormalAttrib = gl.getAttribLocation(shaderProgram, "aVertexNormal");
                if (vertexNormalAttrib === -1) console.log("Error with vertexNormalAttrib");
                gl.enableVertexAttribArray(vertexNormalAttrib); // input to shader from array


                // Get pointer to transform matrix in shader
                projUniform = gl.getUniformLocation(shaderProgram, "proj");
                transUniform = gl.getUniformLocation(shaderProgram, "trans");
                invTransUniform = gl.getUniformLocation(shaderProgram, "invTrans");
                nUniform = gl.getUniformLocation(shaderProgram, "nPower");
                lightPosUniform = gl.getUniformLocation(shaderProgram, "lightPosition");
                ambientVecUniform = gl.getUniformLocation(shaderProgram, "ambientVec");
                diffuseVecUniform = gl.getUniformLocation(shaderProgram, "diffuseVec");
                specularVecUniform = gl.getUniformLocation(shaderProgram, "specularVec");

            } // end if no shader program link errors
        } // end if no compile errors
    } // end try

    catch(e) {
        console.log(e);
    } // end catch
    /*
    altPosition = false;
    setTimeout(function alterPosition() {
        altPosition = !altPosition;
        setTimeout(alterPosition, 2000);
    }, 2000); // switch flag value every 2 seconds
    */
} // end setup shaders


var bgColor = 0;
// render the loaded model
function renderTriangles() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // clear frame/depth buffers
    bgColor = (bgColor < 1) ? (bgColor + 0) : 0;
    gl.clearColor(bgColor, bgColor, bgColor, 1.0);
    //requestAnimationFrame(renderTriangles);
    // vertex buffer: activate and feed into vertex shader
    gl.uniform1i(altPositionUniform, altPosition); // feed

    var viewMat = mat4.create();   // create a modelview matrix and set it to the identity matrix.
    var projMat = mat4.create();    // create a projection matrix and set it to the identity matrix.
    var transformMat = mat4.create();
    var lightPos = vec3.fromValues(0.5, 0.5, -1);

    // Save the viewing transform in viewMat.
    mat4.lookAt(viewMat, eye, lookAtPoint, lookUpVec);
    if ( usePerspective) {
        mat4.perspective(projMat, FOVY, ASPECT_RATIO, 0.0001, 100);
    }
    else {
        mat4.ortho(projMat, -1, 1, -1, 1, 0.0001, 100);
    }
    mat4.multiply(projMat, projMat, viewMat);
    var center;
    for ( var whichTriSet = 0; whichTriSet < numTriangleSets; whichTriSet++ ) {
        center = inputTriangles[whichTriSet].centerVec;
        deltaXRotate = inputTriangles[whichTriSet].rotateXRad;
        deltaYRotate = inputTriangles[whichTriSet].rotateYRad;
        deltaZRotate = inputTriangles[whichTriSet].rotateZRad;
        deltaXScale = inputTriangles[whichTriSet].scaleX;

        centerVec = vec3.fromValues(center[0], center[1], center[2]);
        transformMat = mat4.create();
        invTransMat = mat4.create();

        mat4.translate(transformMat, transformMat, inputTriangles[whichTriSet].transVec);
        mat4.translate(transformMat, transformMat, centerVec);

        mat4.rotate(transformMat, transformMat, inputTriangles[whichTriSet].rotateYRad, lookUpVec);
        mat4.rotate(transformMat, transformMat, inputTriangles[whichTriSet].rotateZRad, lookAtVector);
        mat4.rotate(transformMat, transformMat, inputTriangles[whichTriSet].rotateXRad, xViewVector);
        mat4.scale(transformMat, transformMat, vec3.fromValues(inputTriangles[whichTriSet].scaleX,
                                              inputTriangles[whichTriSet].scaleY,
                                              inputTriangles[whichTriSet].scaleZ));
        vec3.negate(centerVec, centerVec);
        mat4.translate(transformMat, transformMat, centerVec);

        var upper3x3 = mat3.create();
        mat3.fromMat4(upper3x3, transformMat);
        mat4.invert(invTransMat, upper3x3);
        mat4.transpose(invTransMat, invTransMat);

        mat4.multiply(transformMat, projMat, transformMat);
        var upper3x3Two = mat3.create();
        mat3.fromMat4(upper3x3Two, transformMat);

/*
        if ( whichTriSet === PLAYER ) {
          center = inputTriangles[whichTriSet].centerVec;
          var center4 = vec4.fromValues(center[0], center[1], center[2], 1);
          var onlyTranslations = mat4.create();
          mat4.translate(onlyTranslations, onlyTranslations, inputTriangles[whichTriSet].transVec);
          vec4.transformMat4(center4, center4, onlyTranslations);
          console.log("Center of player: " + vec4.str(center4));
          var i = gameCoordToGridCoord(center4[1]);
          var j = gameCoordToGridCoord(center4[0]);
          console.log("Grid coords: ( " + j + "," + i + " )" );
          if ( grid[i][j] === WALL)
            console.log("COLLISION!");
        }
        */

        /*
        var test = mat4.create();
        mat4.multiply(test, invTransMat, transformMat);
        console.log("Is is identity? " + mat4.str(test));
        */


        //console.log(inputTriangles[whichTriSet].centerVec);
        gl.uniformMatrix4fv(transUniform, gl.FALSE, transformMat);
        //gl.uniformMatrix4fv(projUniform, gl.FALSE, projMat);
        gl.uniformMatrix3fv(invTransUniform, gl.FALSE, upper3x3);
        //console.log(inputTriangles[whichTriSet].material.n);
        gl.uniform1f(nUniform, inputTriangles[whichTriSet].material.n);
        gl.uniform3fv(lightPosUniform, lightPos);
        gl.uniform3fv(ambientVecUniform, inputTriangles[whichTriSet].material.ambient);
        gl.uniform3fv(diffuseVecUniform, inputTriangles[whichTriSet].material.diffuse);
        gl.uniform3fv(specularVecUniform, inputTriangles[whichTriSet].material.specular);
        // vertex buffer: activate and feed into vertex shader

        gl.bindBuffer(gl.ARRAY_BUFFER, vertNormalBuffer[whichTriSet]);
        gl.vertexAttribPointer( vertexNormalAttrib, 3, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer[whichTriSet]); // activate
        gl.vertexAttribPointer(vertexPositionAttrib, 3, gl.FLOAT, false, 0, 0); // feed

        // triangle buffer: activate and render
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, triangleBuffer[whichTriSet]); // activate
        gl.drawElements(gl.TRIANGLES, 3*triSetSizes[whichTriSet], gl.UNSIGNED_SHORT,0); // render

    }

    gl.viewport(0, 0, CANVAS_HEIGHT, CANVAS_WIDTH);


} // end render triangles

/* Define all the controls for manipulating the objects
   and camera. Also calculate the transformations.
*/
function setUpActionListeners() {
  var delta = 0.02;
  var deltaRad = 0.05;

  document.addEventListener('keydown', function(event){

    var scaledVector = vec3.create();


  if (event.key === 'a') {                                            // Translate selected object in x.
    console.log('a was pressed');
    inputTriangles[PLAYER].updateX += delta;
    inputTriangles[PLAYER].facing = WEST;
    /*
    vec3.scale(scaledVector, xViewVector, delta);
    vec3.add(inputTriangles[PLAYER].transVec,
               inputTriangles[PLAYER].transVec,
                scaledVector);
                */
    //renderTriangles();

  }

  if (event.key === 'd') {                                            // Translate selected object in x.
    console.log('d was pressed');
    inputTriangles[PLAYER].updateX -= delta;
    inputTriangles[PLAYER].facing = EAST;
    /*
    vec3.scale(scaledVector, xViewVector, -1*delta);
    vec3.add(inputTriangles[PLAYER].transVec,
               inputTriangles[PLAYER].transVec,
                scaledVector);
    */
    //renderTriangles();

  }

  if (event.key === 'w') {                                            // Translate selected object in y.
    console.log('w was pressed');
    inputTriangles[PLAYER].updateY += delta;
    inputTriangles[PLAYER].facing = NORTH;
    /*
    vec3.scale(scaledVector, lookUpVec, delta);
    vec3.add(inputTriangles[PLAYER].transVec,
               inputTriangles[PLAYER].transVec,
                scaledVector);
                */
    //renderTriangles();
  }

  if (event.key === 's') {                                            // Translate selected object in y.
    console.log('s was pressed');
    inputTriangles[PLAYER].updateY -= delta;
    inputTriangles[PLAYER].facing = SOUTH;
    /*vec3.scale(scaledVector, lookUpVec, -1*delta);
    vec3.add(inputTriangles[PLAYER].transVec,
               inputTriangles[PLAYER].transVec,
                scaledVector);
                */
    //renderTriangles();
  }

  if ( event.key === ' ') {
    spawnBullet(PLAYER, inputTriangles[PLAYER].facing);
  }

});
}

function updateBullets() {

  for (var index = BULLET_START_INDEX; index <= BULLET_STOP_INDEX; index++ ) {
    if ( inputTriangles[index].isIdle)
      continue;
    var gridCoords = getGridCoordsFromIndex(index);
    var j = gridCoords[1];
    var i = gridCoords[0];
    if ( grid[i][j] === index ) {
      grid[i][j] = EMPTY;
    }
    //vec3.add( inputTriangles[index].transVec, inputTriangles[index].transVec, vec3.fromValues( -2*DELTA_MOV, 0, 0 ) );
    if ( inputTriangles[index].direction === NORTH ) {
      inputTriangles[index].transVec[1] += DELTA_MOV * 2;
    }
    if ( inputTriangles[index].direction === SOUTH ) {
      inputTriangles[index].transVec[1] -= DELTA_MOV * 2;
    }
    if ( inputTriangles[index].direction === EAST ) {
      inputTriangles[index].transVec[0] -= DELTA_MOV * 2;
    }
    if ( inputTriangles[index].direction === WEST ) {
      inputTriangles[index].transVec[0] += DELTA_MOV * 2;
    }
    gridCoords = getGridCoordsFromIndex(index);
    j = gridCoords[1];
    i = gridCoords[0];

    // Check for a collision and handle accordingly.
    var indexHit = grid[i][j];
    if (indexHit === EMPTY ) {
        grid[i][j] = index;
    }
    else if( indexHit < PLAYER ) { // It hits the wall
        inputTriangles[index].transVec[2] += 100;
        inputTriangles[index].isIdle = true;
        availBullets.push(index);
    }
    else if (indexHit === PLAYER ) {
      inputTriangles[index].transVec[2] += 100;
      inputTriangles[index].isIdle = true;
      availBullets.push(index);
      killPlayer();
    }
    else if (indexHit < BULLET_START_INDEX ) { // It hits a robot
      inputTriangles[index].transVec[2] += 100;
      inputTriangles[index].isIdle = true;
      availBullets.push(index);
      killRobot(indexHit);
    }

  }

}

function killRobot( index ) {
  inputTriangles[index].isDead = true;
  inputTriangles[index].transVec[2] += 100;

  var gridCoords = getGridCoordsFromIndex(index);
  var j = gridCoords[1];
  var i = gridCoords[0];

  if ( grid[i][j] === index )
    grid[i][j] = EMPTY;
  if ( grid[i+1][j] === index )
    grid[i+1][j] = EMPTY;
  if ( grid[i-1][j] === index )
    grid[i-1][j] = EMPTY;
  if ( grid[i][j+1] === index )
    grid[i][j+1] = EMPTY;
  if ( grid[i][j+1] === index )
    grid[i][j+1] = EMPTY;
}

function killPlayer() {

  inputTriangles[PLAYER].isDead = true;
  inputTriangles[PLAYER].transVec[2] += 100;

  var gridCoords = getGridCoordsFromIndex(PLAYER);
  var j = gridCoords[1];
  var i = gridCoords[0];

  if ( grid[i][j] === PLAYER )
    grid[i][j] = EMPTY;
  if ( grid[i+1][j] === PLAYER )
    grid[i+1][j] = EMPTY;
  if ( grid[i-1][j] === PLAYER )
    grid[i-1][j] = EMPTY;
  if ( grid[i][j+1] === PLAYER )
    grid[i][j+1] = EMPTY;
  if ( grid[i][j+1] === PLAYER )
    grid[i][j+1] = EMPTY;


  console.log("Player DIES!!!!");
  setTimeout(respawn, 2000);

}

// Update the player object. Let it move. Later need to add
// removing player and respawning if it hits something.
function updatePlayer( isDead ) {
  if ( isDead )
    return; // Don't update
  var xVal = inputTriangles[PLAYER].updateX;
  if (xVal > DELTA_MOV)
    xVal = DELTA_MOV;
  if (xVal < -1 * DELTA_MOV)
    xVal = -1*DELTA_MOV;
  var yVal = inputTriangles[PLAYER].updateY;
  if (yVal > DELTA_MOV)
      yVal = DELTA_MOV;
  if (yVal < -1 * DELTA_MOV)
      yVal = -1 * DELTA_MOV;

  // Keep the grid coords up to date.
  var gridCoords = getGridCoordsFromIndex(PLAYER);
  var j = gridCoords[1];
  var i = gridCoords[0];
  // Remove the current location from grid
  if ( grid[i][j] === PLAYER ) {
    grid[i][j] = EMPTY;
  }
  if ( grid[i-1][j] === PLAYER ) {
    grid[i-1][j] = EMPTY;
  }
  if ( grid[i+1][j] === PLAYER ){
    grid[i+1][j] = EMPTY;
  }
  if ( grid[i+1][j] === PLAYER ){
    grid[i][j] = EMPTY;
  }
  if ( grid[i][j+1] === PLAYER ){
    grid[i][j+1] = EMPTY;
  }
  if ( grid[i][j-1] === PLAYER ) {
    grid[i][j-1] = EMPTY;
  }

  // Update the player's position.
  var scaledVector = vec3.create();
  vec3.scale(scaledVector, xViewVector, xVal);
  vec3.add(inputTriangles[PLAYER].transVec,
             inputTriangles[PLAYER].transVec,
              scaledVector);
  scaledVector = vec3.create();
  vec3.scale(scaledVector, lookUpVec, yVal);
  vec3.add(inputTriangles[PLAYER].transVec,
             inputTriangles[PLAYER].transVec,
              scaledVector);

   gridCoords = getGridCoordsFromIndex(PLAYER);
   var j = gridCoords[1];
   var i = gridCoords[0];

   if ( grid[i][j] === EMPTY &&  grid[i-1][j] === EMPTY &&
        grid[i+1][j] === EMPTY && grid[i][j-1] === EMPTY &&
        grid[i][j+1] === EMPTY ) {

          grid[i][j] = PLAYER; // Add the new location to the grid
          grid[i-1][j] = PLAYER;
          grid[i+1][j] = PLAYER;
          grid[i][j-1] = PLAYER;
          grid[i][j+1] = PLAYER;
   }
   else {
     // Player dies
     killPlayer();
   }

  inputTriangles[PLAYER].updateX = 0;
  inputTriangles[PLAYER].updateY = 0;
}

// Return the player back to starting position.
function respawn() {
  console.log("Player is reborn!!!!!");
  inputTriangles[PLAYER].isDead = true;
  //console.log(JSON.parse(JSON.stringify(inputs[PLAYER])));
  //console.log(JSON.parse(JSON.stringify(inputTriangles[PLAYER])));
  inputTriangles[PLAYER] = JSON.parse(JSON.stringify(inputs[PLAYER]));
  loadSingleTriangle(PLAYER);
  inputTriangles[PLAYER].updateX = 0;
  inputTriangles[PLAYER].updateY = 0;
  initPlayer( PLAYER );
}

function spawnBullet( shooterIndex, direction ) {
    if (availBullets.length === 0) {
      console.log("No available bullets");
      return;
    }
    var bIndex = availBullets.pop();
    // Make the spawned bullet appear next to shooter.
    inputTriangles[bIndex].transVec = JSON.parse(JSON.stringify(inputTriangles[shooterIndex].transVec));
    if ( direction === NORTH ) {
      inputTriangles[bIndex].transVec[1] += DELTA_MOV * 3;
    }
    if ( direction === SOUTH ) {
      inputTriangles[bIndex].transVec[1] -= DELTA_MOV * 3;
    }
    if ( direction === EAST ) {
      inputTriangles[bIndex].transVec[0] -= DELTA_MOV * 3;
    }
    if ( direction === WEST ) {
      inputTriangles[bIndex].transVec[0] += DELTA_MOV * 3;
    }

    inputTriangles[bIndex].direction = direction;
    inputTriangles[bIndex].isIdle = false;
}

// Look into the inputTriangles[i] to calculate the location
// of object i on the grid.
function getGridCoordsFromIndex( i ) {
  var center = inputTriangles[i].centerVec;
  var center4 = vec4.fromValues(center[0], center[1], center[2], 1);
  var onlyTranslations = mat4.create();
  mat4.translate(onlyTranslations, onlyTranslations, inputTriangles[i].transVec);
  vec4.transformMat4(center4, center4, onlyTranslations);
  //console.log("Robot is at (" + center4[0] + ", " + center4[1] + ")");
  return [gameCoordToGridCoord(center4[1]), gameCoordToGridCoord(center4[0])];
}

function updateRobots() {

  // Determine which directions are possible
  var indexInInputTri;
  for (var thisRobot = 0; thisRobot < robotIndices.length; thisRobot++ ) {
    indexInInputTri = robotIndices[thisRobot];
    if (inputTriangles[indexInInputTri].isDead)
      continue;
    // Look at the four choices in grid to see what's available.
    var options = [];

    // Calculate the center of the robot and find it in the grid.
    var gridCoords = getGridCoordsFromIndex(indexInInputTri);
    var j = gridCoords[1];
    var i = gridCoords[0];

    if (grid[i + 2][j] != WALL ) {
      options.push(SOUTH);
    }
    if (grid[i - 2][j] != WALL  ) {
      options.push(NORTH);
    }
    if (grid[i][j + 2] != WALL ) {
      options.push(EAST);
    }
    if (grid[i][j - 2] != WALL ) {
      options.push(WEST);
    }
    var choice = options[ Math.floor(Math.random() * options.length) ];
    if ( choice === WEST ) {
      vec3.add( inputTriangles[indexInInputTri].transVec, inputTriangles[indexInInputTri].transVec, vec3.fromValues( DELTA_MOV, 0, 0 ) );
      //console.log("Moving WEST");
    }
    if ( choice === EAST ) {
      vec3.add( inputTriangles[indexInInputTri].transVec, inputTriangles[indexInInputTri].transVec, vec3.fromValues( -1*DELTA_MOV, 0, 0 ) );
      //console.log("Moving EAST");
    }
    if ( choice === NORTH ) {
      vec3.add( inputTriangles[indexInInputTri].transVec, inputTriangles[indexInInputTri].transVec, vec3.fromValues( 0,DELTA_MOV*1, 0 ) );
      //console.log("Moving NORTH");
    }
    if ( choice === SOUTH ) {
      vec3.add( inputTriangles[indexInInputTri].transVec, inputTriangles[indexInInputTri].transVec, vec3.fromValues(0, -1*DELTA_MOV, 0 ) );
      //console.log("Moving SOUTH");
    }

    grid[i][j] = EMPTY; // Remove the current location from grid
    grid[i-1][j] = EMPTY;
    grid[i+1][j] = EMPTY;
    grid[i][j-1] = EMPTY;
    grid[i][j+1] = EMPTY;

    // Add the new location to the grid.
    var gridCoords = getGridCoordsFromIndex(indexInInputTri);
    j = gridCoords[1];
    i = gridCoords[0];
    //console.log("New robot grid coords = [" + i + "][" + j + "]");

    grid[i][j] = indexInInputTri; // Add the new location to the grid
    grid[i-1][j] = indexInInputTri;
    grid[i+1][j] = indexInInputTri;
    grid[i][j-1] = indexInInputTri;
    grid[i][j+1] = indexInInputTri;

    // Maybe shoot a bullet
    if (Math.random() > 0.95 ) {
      spawnBullet( indexInInputTri, choice);
    }

  }

}

function updateModels() {
  updateRobots();
  updatePlayer( inputTriangles[PLAYER].isDead );
  updateBullets();
  renderTriangles();
  setTimeout( updateModels, 50);
}


/* MAIN -- HERE is where execution begins after window load */

function main() {
  setUpActionListeners();
  setupWebGL();      // set up the webGL environment
  loadTriangles();   // load in the triangles from tri file
  setupShaders();    // setup the webGL shaders
  initGrid();
  renderTriangles(); // draw the triangles using webGL
  setTimeout(updateModels, 50); // Constantly update model and redraw.


} // end main
