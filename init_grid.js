var grid = [];
var GRID_HEIGHT = 248;
var GRID_WIDTH = 248;
var EMPTY = 0;
var WALL = 1;
var ROBOT = 2;
var DRPYRAMID = 3;

// Initialize an empty grid. The grid is used to detect collisions
function initGrid() {
  for ( var i = 0; i < GRID_HEIGHT; i++ ) {
    var oneRow = [];
    for ( var j = 0; j < GRID_WIDTH; j++ ) {
      oneRow.push(EMPTY);
    }
    grid.push(oneRow);
  }
  /*
  console.log("One row");
  console.log(grid[0].toString());
  console.log("THe whole grid");
  console.log(grid.toString());
  console.log(grid[3][5]);
  */
  // Put all 8 walls into the grid.
  initWall(1.67, 1.66, 1.59, -0.68); // Init the left wall
  initWall(1.59, 1.68, -0.64, 1.56); // Make a barrier at top gap.
  initWall(1.68, 1.68, 0.8, 1.56);   // 1
  initWall(0.88, 1.68, 0.76, 1.21);   // 3
  initWall(0.26, 1.64, 0.16, 1.21);  // 4
  initWall(0.24, 1.68, -0.64, 1.56);  // 2
  initWall(-0.54, 1.68, -0.64, -0.7);  // 10
  initWall(0.28, -0.57, -0.64, -0.7);  // 8
  initWall(0.26, 0.14, -0.64, 0.0);  // 6
  initWall(1.68, 0.14, 0.78, 0.0);  // 5
  initWall(1.68, -0.58, 0.78, -0.7);  // 7
  initWall(0.78, -0.58, 0.28, -0.7);

  initPlayer( PLAYER );
}

// Put the player in the grid. Find position from it's
// index in the inputTriangles.
function initPlayer( index ) {
  var c = getGridCoordsFromIndex( index );
  grid[c[0]][c[1]] = PLAYER;
  grid[c[0] + 1][c[1]] = PLAYER;
  grid[c[0] - 1][c[1]] = PLAYER;
  grid[c[0]][c[1] + 1] = PLAYER;
  grid[c[0]][c[1] - 1] = PLAYER;
}


// Given a coordinate in the game world space find which
// row or column in the grid it corresponds to.
function gameCoordToGridCoord( x ) {
  x = Math.round(x * 100 );
  var retVal =  170 - x;
  if (retVal < 0 || retVal >= GRID_HEIGHT ) {
    console.log("Impossible grid coordinate!");
  }
  return retVal;
}

/*
// Given a coordinate in the game world space find which
// row or column in the grid it corresponds to.
function gameYCoordToGridCoord( y ) {
  y = Math.round(y * 100 );
  var retVal =  170 - y;
  if (retVal < 0 || retVal >= GRID_HEIGHT ) {
    console.log("Impossible grid coordinate!");
  }
  return retVal;
}
*/

// Given the (x, y) coordinates of two catty corners of a wall store
// all the locations in the game grid. Assumes given wall is not
// caddywompus at all.
function initWall(x1, y1, x2, y2) {
  var jStart = gameCoordToGridCoord(x1);
  var jStop = gameCoordToGridCoord(x2);
  var iStart = gameCoordToGridCoord(y1);
  var iStop = gameCoordToGridCoord(y2);

  for ( var i = iStart; i <= iStop; i++ ) {
    for ( var j = jStart; j <= jStop; j++ ) {
      //console.log("i = " + i + " j = " + j);
      grid[i][j] = WALL;
    }
  }
}
