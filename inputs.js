var inputs = [

  { // The giant flat floor.
    "material": {"ambient": [0.1,0.1,0.1], "diffuse": [0.5,0.5,0.5], "specular": [0.5,0.5,0.5], "n":3},
    "vertices": [[12.0, 12.0, 1.0],[12.0, -12.0, 1.0],[-12.0, -12.0, 1.0],[-12.0, 12.0, 1.0]],
    "normals": [[0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, -1]],
    "triangles": [[0,1,2],[2,3,0]],
    "jtransVec": [0,0,0],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": 1,
    "scaleY": 1,
    "scaleZ": 1
  }, // End Floor   1

  { // The left wall
    "material": {"ambient": [0.0,0.0,0.0], "diffuse": [0.1,0.1,0.1], "specular": [0.1,0.1,0.1], "n":3},
    "vertices": [[0,0.1,0.97],[0,0.1,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // Top surface [0,1,2,3]
                 [0,0,0.97],[0,0,1.01],[0.1,0,0.97],[0.1,0,1.01],         // bottom     [4,5,6,7]
                 [0,0,0.97],[0,0,1.01],[0,0.1,0.97],[0,0.1,1.01],         // left        [8,9,10,11]
                 [0.1,0,0.97],[0.1,0,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // right        [12,13,14,15]
                 [0,0,0.97],[0,0.1,0.97], [0.1,0,0.97], [0.1,0.1,0.97],    // front        [16,17,18,19]
                 [0,0,1.01],[0,0.1,1.01], [0.1,0,1.01], [0.1,0.1,1.01]    // back        [20,21,22,23]
               ],
    "normals": [[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],
                [-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],
                [0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, 1],[0, 0, 1],[0, 0, 1],[0, 0, 1]],
    "triangles": [[0,1,2],[1,3,2],[4,5,6],[5,7,6],[8,9,10],[9,10,11],[12,13,14],[13,14,15],
                  [16,17,18], [17,18,19], [20,21,22],[21,22,23]],
    "jtransVec": [1.87, 0.44, 0],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 1.5707,
    "scaleX": 28.7,
    "scaleY": 0.3,
    "scaleZ": 1

  }, // End left/West wall   2

  { // The right/East wall
    "material": {"ambient": [0.0,0.0,0.0], "diffuse": [0.1,0.1,0.1], "specular": [0.1,0.1,0.1], "n":3},
    "vertices": [[0,0.1,0.97],[0,0.1,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // Top surface [0,1,2,3]
                 [0,0,0.97],[0,0,1.01],[0.1,0,0.97],[0.1,0,1.01],         // bottom     [4,5,6,7]
                 [0,0,0.97],[0,0,1.01],[0,0.1,0.97],[0,0.1,1.01],         // left        [8,9,10,11]
                 [0.1,0,0.97],[0.1,0,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // right        [12,13,14,15]
                 [0,0,0.97],[0,0.1,0.97], [0.1,0,0.97], [0.1,0.1,0.97],    // front        [16,17,18,19]
                 [0,0,1.01],[0,0.1,1.01], [0.1,0,1.01], [0.1,0.1,1.01]    // back        [20,21,22,23]
               ],
    "normals": [[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],
                [-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],
                [0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, 1],[0, 0, 1],[0, 0, 1],[0, 0, 1]],
    "triangles": [[0,1,2],[1,3,2],[4,5,6],[5,7,6],[8,9,10],[9,10,11],[12,13,14],[13,14,15],
                  [16,17,18], [17,18,19], [20,21,22],[21,22,23]],
    "jtransVec": [-0.91, 0.44, 0],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 1.5707,
    "scaleX": 28.7,
    "scaleY": 0.30,
    "scaleZ": 1

  }, // End right/east wall   3

  { // Wall 1 / top left
    "material": {"ambient": [0.0,0.0,0.0], "diffuse": [0.1,0.1,0.1], "specular": [0.1,0.1,0.1], "n":3},
    "vertices": [[0,0.1,0.97],[0,0.1,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // Top surface [0,1,2,3]
                 [0,0,0.97],[0,0,1.01],[0.1,0,0.97],[0.1,0,1.01],         // bottom     [4,5,6,7]
                 [0,0,0.97],[0,0,1.01],[0,0.1,0.97],[0,0.1,1.01],         // left        [8,9,10,11]
                 [0.1,0,0.97],[0.1,0,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // right        [12,13,14,15]
                 [0,0,0.97],[0,0.1,0.97], [0.1,0,0.97], [0.1,0.1,0.97],    // front        [16,17,18,19]
                 [0,0,1.01],[0,0.1,1.01], [0.1,0,1.01], [0.1,0.1,1.01]    // back        [20,21,22,23]
               ],
    "normals": [[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],
                [-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],
                [0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, 1],[0, 0, 1],[0, 0, 1],[0, 0, 1]],
    "triangles": [[0,1,2],[1,3,2],[4,5,6],[5,7,6],[8,9,10],[9,10,11],[12,13,14],[13,14,15],
                  [16,17,18], [17,18,19], [20,21,22],[21,22,23]],
    "jtransVec": [1.36, 1.86, 0],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": 10.5,
    "scaleY": 0.30,
    "scaleZ": 1

  }, // end wall 1 / top left   4


  { // Wall 7 / bottom left
    "material": {"ambient": [0.0,0.0,0.0], "diffuse": [0.0,0.0,0.0], "specular": [0.0,0.0,0.0], "n":3},
    "material": {"ambient": [0.0,0.0,0.0], "diffuse": [0.1,0.1,0.1], "specular": [0.1,0.1,0.1], "n":3},
    "vertices": [[0,0.1,0.97],[0,0.1,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // Top surface [0,1,2,3]
                 [0,0,0.97],[0,0,1.01],[0.1,0,0.97],[0.1,0,1.01],         // bottom     [4,5,6,7]
                 [0,0,0.97],[0,0,1.01],[0,0.1,0.97],[0,0.1,1.01],         // left        [8,9,10,11]
                 [0.1,0,0.97],[0.1,0,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // right        [12,13,14,15]
                 [0,0,0.97],[0,0.1,0.97], [0.1,0,0.97], [0.1,0.1,0.97],    // front        [16,17,18,19]
                 [0,0,1.01],[0,0.1,1.01], [0.1,0,1.01], [0.1,0.1,1.01]    // back        [20,21,22,23]
               ],
    "normals": [[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],
                [-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],
                [0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, 1],[0, 0, 1],[0, 0, 1],[0, 0, 1]],
    "triangles": [[0,1,2],[1,3,2],[4,5,6],[5,7,6],[8,9,10],[9,10,11],[12,13,14],[13,14,15],
                  [16,17,18], [17,18,19], [20,21,22],[21,22,23]],
    "jtransVec": [1.36, -0.98, 0],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": 10.5,
    "scaleY": 0.30,
    "scaleZ": 1

  }, // end wall 7 / bottom left    5

  { // Wall 5 / mid left
    "material": {"ambient": [0.0,0.0,0.0], "diffuse": [0.1,0.1,0.1], "specular": [0.1,0.1,0.1], "n":3},
    "vertices": [[0,0.1,0.97],[0,0.1,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // Top surface [0,1,2,3]
                 [0,0,0.97],[0,0,1.01],[0.1,0,0.97],[0.1,0,1.01],         // bottom     [4,5,6,7]
                 [0,0,0.97],[0,0,1.01],[0,0.1,0.97],[0,0.1,1.01],         // left        [8,9,10,11]
                 [0.1,0,0.97],[0.1,0,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // right        [12,13,14,15]
                 [0,0,0.97],[0,0.1,0.97], [0.1,0,0.97], [0.1,0.1,0.97],    // front        [16,17,18,19]
                 [0,0,1.01],[0,0.1,1.01], [0.1,0,1.01], [0.1,0.1,1.01]    // back        [20,21,22,23]
               ],
    "normals": [[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],
                [-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],
                [0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, 1],[0, 0, 1],[0, 0, 1],[0, 0, 1]],
    "triangles": [[0,1,2],[1,3,2],[4,5,6],[5,7,6],[8,9,10],[9,10,11],[12,13,14],[13,14,15],
                  [16,17,18], [17,18,19], [20,21,22],[21,22,23]],
    "jtransVec": [1.36, -0.08, 0],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": 10.5,
    "scaleY": 0.30,
    "scaleZ": 1

  }, // end wall 5 / mid left   6
  { // Wall 2 / top right
    "material": {"ambient": [0.0,0.0,0.0], "diffuse": [0.1,0.1,0.1], "specular": [0.1,0.1,0.1], "n":3},
    "vertices": [[0,0.1,0.97],[0,0.1,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // Top surface [0,1,2,3]
                 [0,0,0.97],[0,0,1.01],[0.1,0,0.97],[0.1,0,1.01],         // bottom     [4,5,6,7]
                 [0,0,0.97],[0,0,1.01],[0,0.1,0.97],[0,0.1,1.01],         // left        [8,9,10,11]
                 [0.1,0,0.97],[0.1,0,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // right        [12,13,14,15]
                 [0,0,0.97],[0,0.1,0.97], [0.1,0,0.97], [0.1,0.1,0.97],    // front        [16,17,18,19]
                 [0,0,1.01],[0,0.1,1.01], [0.1,0,1.01], [0.1,0.1,1.01]    // back        [20,21,22,23]
               ],
    "normals": [[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],
                [-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],
                [0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, 1],[0, 0, 1],[0, 0, 1],[0, 0, 1]],
    "triangles": [[0,1,2],[1,3,2],[4,5,6],[5,7,6],[8,9,10],[9,10,11],[12,13,14],[13,14,15],
                  [16,17,18], [17,18,19], [20,21,22],[21,22,23]],
    "jtransVec": [-0.40, 1.86, 0],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": 10.5,
    "scaleY": 0.30,
    "scaleZ": 1

  }, // end wall 2 / top right    7

  { // Wall 8 / bottom right      8
    "material": {"ambient": [0.0,0.0,0.0], "diffuse": [0.1,0.1,0.1], "specular": [0.1,0.1,0.1], "n":3},
    "vertices": [[0,0.1,0.97],[0,0.1,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // Top surface [0,1,2,3]
                 [0,0,0.97],[0,0,1.01],[0.1,0,0.97],[0.1,0,1.01],         // bottom     [4,5,6,7]
                 [0,0,0.97],[0,0,1.01],[0,0.1,0.97],[0,0.1,1.01],         // left        [8,9,10,11]
                 [0.1,0,0.97],[0.1,0,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // right        [12,13,14,15]
                 [0,0,0.97],[0,0.1,0.97], [0.1,0,0.97], [0.1,0.1,0.97],    // front        [16,17,18,19]
                 [0,0,1.01],[0,0.1,1.01], [0.1,0,1.01], [0.1,0.1,1.01]    // back        [20,21,22,23]
               ],
    "normals": [[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],
                [-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],
                [0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, 1],[0, 0, 1],[0, 0, 1],[0, 0, 1]],
    "triangles": [[0,1,2],[1,3,2],[4,5,6],[5,7,6],[8,9,10],[9,10,11],[12,13,14],[13,14,15],
                  [16,17,18], [17,18,19], [20,21,22],[21,22,23]],
    "jtransVec": [-0.40, -0.98, 0],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": 10.5,
    "scaleY": 0.30,
    "scaleZ": 1

  }, // end wall 8 / bottom right    8

  { // Wall 6 / mid right     9
    "material": {"ambient": [0.0,0.0,0.0], "diffuse": [0.1,0.1,0.1], "specular": [0.1,0.1,0.1], "n":3},
    "vertices": [[0,0.1,0.97],[0,0.1,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // Top surface [0,1,2,3]
                 [0,0,0.97],[0,0,1.01],[0.1,0,0.97],[0.1,0,1.01],         // bottom     [4,5,6,7]
                 [0,0,0.97],[0,0,1.01],[0,0.1,0.97],[0,0.1,1.01],         // left        [8,9,10,11]
                 [0.1,0,0.97],[0.1,0,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // right        [12,13,14,15]
                 [0,0,0.97],[0,0.1,0.97], [0.1,0,0.97], [0.1,0.1,0.97],    // front        [16,17,18,19]
                 [0,0,1.01],[0,0.1,1.01], [0.1,0,1.01], [0.1,0.1,1.01]    // back        [20,21,22,23]
               ],
    "normals": [[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],
                [-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],
                [0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, 1],[0, 0, 1],[0, 0, 1],[0, 0, 1]],
    "triangles": [[0,1,2],[1,3,2],[4,5,6],[5,7,6],[8,9,10],[9,10,11],[12,13,14],[13,14,15],
                  [16,17,18], [17,18,19], [20,21,22],[21,22,23]],
    "jtransVec": [-0.40, -0.08, 0],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": 10.5,
    "scaleY": 0.30,
    "scaleZ": 1

  }, // end wall 6 / mid right      9

  { // Wall 3 / dangling left       10
    "material": {"ambient": [0.0,0.0,0.0], "diffuse": [0.1,0.1,0.1], "specular": [0.1,0.1,0.1], "n":3},
    "vertices": [[0,0.1,0.97],[0,0.1,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // Top surface [0,1,2,3]
                 [0,0,0.97],[0,0,1.01],[0.1,0,0.97],[0.1,0,1.01],         // bottom     [4,5,6,7]
                 [0,0,0.97],[0,0,1.01],[0,0.1,0.97],[0,0.1,1.01],         // left        [8,9,10,11]
                 [0.1,0,0.97],[0.1,0,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // right        [12,13,14,15]
                 [0,0,0.97],[0,0.1,0.97], [0.1,0,0.97], [0.1,0.1,0.97],    // front        [16,17,18,19]
                 [0,0,1.01],[0,0.1,1.01], [0.1,0,1.01], [0.1,0.1,1.01]    // back        [20,21,22,23]
               ],
    "normals": [[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],
                [-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],
                [0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, 1],[0, 0, 1],[0, 0, 1],[0, 0, 1]],
    "triangles": [[0,1,2],[1,3,2],[4,5,6],[5,7,6],[8,9,10],[9,10,11],[12,13,14],[13,14,15],
                  [16,17,18], [17,18,19], [20,21,22],[21,22,23]],
    "jtransVec": [0.85, 1.61, 0],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 1.57,
    "scaleX": 4.5,
    "scaleY": 0.30,
    "scaleZ": 1

  }, // end wall 3 / dangling left    10

  { // Wall 3 / dangling right      11
    "material": {"ambient": [0.0,0.0,0.0], "diffuse": [0.1,0.1,0.1], "specular": [0.1,0.1,0.1], "n":3},
    "vertices": [[0,0.1,0.97],[0,0.1,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // Top surface [0,1,2,3]
                 [0,0,0.97],[0,0,1.01],[0.1,0,0.97],[0.1,0,1.01],         // bottom     [4,5,6,7]
                 [0,0,0.97],[0,0,1.01],[0,0.1,0.97],[0,0.1,1.01],         // left        [8,9,10,11]
                 [0.1,0,0.97],[0.1,0,1.01],[0.1,0.1,0.97],[0.1,0.1,1.01], // right        [12,13,14,15]
                 [0,0,0.97],[0,0.1,0.97], [0.1,0,0.97], [0.1,0.1,0.97],    // front        [16,17,18,19]
                 [0,0,1.01],[0,0.1,1.01], [0.1,0,1.01], [0.1,0.1,1.01]    // back        [20,21,22,23]
               ],
    "normals": [[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],[0, -1, 0],
                [-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],
                [0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, -1],[0, 0, 1],[0, 0, 1],[0, 0, 1],[0, 0, 1]],
    "triangles": [[0,1,2],[1,3,2],[4,5,6],[5,7,6],[8,9,10],[9,10,11],[12,13,14],[13,14,15],
                  [16,17,18], [17,18,19], [20,21,22],[21,22,23]],
    "jtransVec": [0.1, 1.61, 0],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 1.57,
    "scaleX": 4.5,
    "scaleY": 0.30,
    "scaleZ": 1

  }, // end wall 3 / dangling right     11

  { // Main character. Dr. Pyramid.    12
    "material": {"ambient": [.015625,0.410156,0.855469], "diffuse": [.015625,0.410156,0.855469], "specular": [.015625,0.410156,0.855469], "n":9},
    "vertices": [[-1.0, 1.0, 2.01],[1.0, 1.0, 2.01],[0.0, 0.0, 1.01],
    [1.0, 1.0, 2.01],[1.0, -1.0, 2.01],[0.0, 0.0, 1.01],
    [1.0, -1.0, 2.01],[-1.0, -1.0, 2.01],[0.0, 0.0, 1.01],
    [-1.0, -1.0, 2.01],[-1.0, 1.0, 2.01],[0.0, 0.0, 1.01],

    [-1.0, 1.0, 2.01],[1.0, 1.0, 2.01],[0.0, 0.0, 3.01],
    [1.0, 1.0, 2.01],[1.0, -1.0, 2.01],[0.0, 0.0, 3.01],
    [1.0, -1.0, 2.01],[-1.0, -1.0, 2.01],[0.0, 0.0, 3.01],
    [-1.0, -1.0, 2.01],[-1.0, 1.0, 2.01],[0.0, 0.0, 3.01]],

    "normals": [[0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107],
                [0.707107, 0, 0.707107], [0.707107, 0, 0.707107], [0.707107, 0, 0.707107],
                [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107],
                [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107],

                [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107],
                [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107],
                [0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107],
                [0.707107, 0, 0.707107], [0.707107, 0, 0.707107], [0.707107, 0, 0.707107]
              ],
    "triangles": [[0,1,2],[3,4,5],[6,7,8],[9,10,11],[12,13,14],[15,16,17],[18,19,20],[21,22,23]],
    "jtransVec": [1.5, 0.8, -1.3],
    "rotateXRad": 0,
    "rotateYRad": 1.57,
    "rotateZRad": 0,
    "scaleX": .05,
    "scaleY": .05,
    "scaleZ": .05

  }, // end PLAYER    12

  { // Robot.     13
    "material": {"ambient": [0.0351563, 0.585938, 0.0429688], "diffuse": [0.0351563, 0.585938, 0.0429688], "specular": [0.0351563, 0.585938, 0.0429688], "n":3},
    "vertices": [[-1.0, 1.0, 2.01],[1.0, 1.0, 2.01],[0.0, 0.0, 1.01],
    [1.0, 1.0, 2.01],[1.0, -1.0, 2.01],[0.0, 0.0, 1.01],
    [1.0, -1.0, 2.01],[-1.0, -1.0, 2.01],[0.0, 0.0, 1.01],
    [-1.0, -1.0, 2.01],[-1.0, 1.0, 2.01],[0.0, 0.0, 1.01],

    [-1.0, 1.0, 2.01],[1.0, 1.0, 2.01],[0.0, 0.0, 3.01],
    [1.0, 1.0, 2.01],[1.0, -1.0, 2.01],[0.0, 0.0, 3.01],
    [1.0, -1.0, 2.01],[-1.0, -1.0, 2.01],[0.0, 0.0, 3.01],
    [-1.0, -1.0, 2.01],[-1.0, 1.0, 2.01],[0.0, 0.0, 3.01]],

    "normals": [[0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107],
                [0.707107, 0, 0.707107], [0.707107, 0, 0.707107], [0.707107, 0, 0.707107],
                [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107],
                [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107],

                [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107],
                [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107],
                [0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107],
                [0.707107, 0, 0.707107], [0.707107, 0, 0.707107], [0.707107, 0, 0.707107]
              ],
    "triangles": [[0,1,2],[3,4,5],[6,7,8],[9,10,11],[12,13,14],[15,16,17],[18,19,20],[21,22,23]],
    "jtransVec": [1.0, 0.8, -1.3],
    "rotateXRad": 0,
    "rotateYRad": 1.57,
    "rotateZRad": 0,
    "scaleX": .05,
    "scaleY": .05,
    "scaleZ": .05

  }, // end Robot    13

  { // Robot.     14
    "material": {"ambient": [0.0351563, 0.585938, 0.0429688], "diffuse": [0.0351563, 0.585938, 0.0429688], "specular": [0.0351563, 0.585938, 0.0429688], "n":3},
    "vertices": [[-1.0, 1.0, 2.01],[1.0, 1.0, 2.01],[0.0, 0.0, 1.01],
    [1.0, 1.0, 2.01],[1.0, -1.0, 2.01],[0.0, 0.0, 1.01],
    [1.0, -1.0, 2.01],[-1.0, -1.0, 2.01],[0.0, 0.0, 1.01],
    [-1.0, -1.0, 2.01],[-1.0, 1.0, 2.01],[0.0, 0.0, 1.01],

    [-1.0, 1.0, 2.01],[1.0, 1.0, 2.01],[0.0, 0.0, 3.01],
    [1.0, 1.0, 2.01],[1.0, -1.0, 2.01],[0.0, 0.0, 3.01],
    [1.0, -1.0, 2.01],[-1.0, -1.0, 2.01],[0.0, 0.0, 3.01],
    [-1.0, -1.0, 2.01],[-1.0, 1.0, 2.01],[0.0, 0.0, 3.01]],

    "normals": [[0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107],
                [0.707107, 0, 0.707107], [0.707107, 0, 0.707107], [0.707107, 0, 0.707107],
                [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107],
                [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107],

                [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107],
                [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107],
                [0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107],
                [0.707107, 0, 0.707107], [0.707107, 0, 0.707107], [0.707107, 0, 0.707107]
              ],
    "triangles": [[0,1,2],[3,4,5],[6,7,8],[9,10,11],[12,13,14],[15,16,17],[18,19,20],[21,22,23]],
    "jtransVec": [0.0, 1.2, -1.3],
    "rotateXRad": 0,
    "rotateYRad": 1.57,
    "rotateZRad": 0,
    "scaleX": .05,
    "scaleY": .05,
    "scaleZ": .05

  }, // end Robot    14

  { // Robot.     15
    "material": {"ambient": [0.0351563, 0.585938, 0.0429688], "diffuse": [0.0351563, 0.585938, 0.0429688], "specular": [0.0351563, 0.585938, 0.0429688], "n":3},
    "vertices": [[-1.0, 1.0, 2.01],[1.0, 1.0, 2.01],[0.0, 0.0, 1.01],
    [1.0, 1.0, 2.01],[1.0, -1.0, 2.01],[0.0, 0.0, 1.01],
    [1.0, -1.0, 2.01],[-1.0, -1.0, 2.01],[0.0, 0.0, 1.01],
    [-1.0, -1.0, 2.01],[-1.0, 1.0, 2.01],[0.0, 0.0, 1.01],

    [-1.0, 1.0, 2.01],[1.0, 1.0, 2.01],[0.0, 0.0, 3.01],
    [1.0, 1.0, 2.01],[1.0, -1.0, 2.01],[0.0, 0.0, 3.01],
    [1.0, -1.0, 2.01],[-1.0, -1.0, 2.01],[0.0, 0.0, 3.01],
    [-1.0, -1.0, 2.01],[-1.0, 1.0, 2.01],[0.0, 0.0, 3.01]],

    "normals": [[0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107],
                [0.707107, 0, 0.707107], [0.707107, 0, 0.707107], [0.707107, 0, 0.707107],
                [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107],
                [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107],

                [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107], [0.0, -0.707107, -0.707107],
                [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107], [-0.707107, 0, -0.707107],
                [0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107], [0.0, 0.707107, -0.707107],
                [0.707107, 0, 0.707107], [0.707107, 0, 0.707107], [0.707107, 0, 0.707107]
              ],
    "triangles": [[0,1,2],[3,4,5],[6,7,8],[9,10,11],[12,13,14],[15,16,17],[18,19,20],[21,22,23]],
    "jtransVec": [1.0, -0.5, -1.3],
    "rotateXRad": 0,
    "rotateYRad": 1.57,
    "rotateZRad": 0,
    "scaleX": .05,
    "scaleY": .05,
    "scaleZ": .05

  }, // end Robot    15

  { // Bullet.     16
    "material": {"ambient": [0.2, 0.0, 0.0], "diffuse": [.8,0,0], "specular": [0.8,0.0,0.0], "n":11},
    "vertices": [[-0.1, 0, 2.01],[0.1, 0, 2.01],[0, 0.1, 2.01],[0, -0.1, 2.01]],
    "normals": [[0, 0, -1],[0, 0, -1],[0, 0, -1], [0, 0, -1]],
    "triangles": [[0,1,2], [0,1,3]],
    "jtransVec": [1.4, 0.8, 15.3],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": .2,
    "scaleY": .2,
    "scaleZ": .2

  }, // end Robot    16

  { // Bullet.     16
    "material": {"ambient": [0.2, 0.0, 0.0], "diffuse": [.8,0,0], "specular": [0.8,0.0,0.0], "n":11},
    "vertices": [[-0.1, 0, 2.01],[0.1, 0, 2.01],[0, 0.1, 2.01],[0, -0.1, 2.01]],
    "normals": [[0, 0, -1],[0, 0, -1],[0, 0, -1], [0, 0, -1]],
    "triangles": [[0,1,2], [0,1,3]],
    "jtransVec": [1.4, 0.8, 15.3],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": .2,
    "scaleY": .2,
    "scaleZ": .2

  }, // end Robot    16
  { // Bullet.     16
    "material": {"ambient": [0.2, 0.0, 0.0], "diffuse": [.8,0,0], "specular": [0.8,0.0,0.0], "n":11},
    "vertices": [[-0.1, 0, 2.01],[0.1, 0, 2.01],[0, 0.1, 2.01],[0, -0.1, 2.01]],
    "normals": [[0, 0, -1],[0, 0, -1],[0, 0, -1], [0, 0, -1]],
    "triangles": [[0,1,2], [0,1,3]],
    "jtransVec": [1.4, 0.8, 15.3],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": .2,
    "scaleY": .2,
    "scaleZ": .2

  }, // end Robot    16
  { // Bullet.     16
    "material": {"ambient": [0.2, 0.0, 0.0], "diffuse": [.8,0,0], "specular": [0.8,0.0,0.0], "n":11},
    "vertices": [[-0.1, 0, 2.01],[0.1, 0, 2.01],[0, 0.1, 2.01],[0, -0.1, 2.01]],
    "normals": [[0, 0, -1],[0, 0, -1],[0, 0, -1], [0, 0, -1]],
    "triangles": [[0,1,2], [0,1,3]],
    "jtransVec": [1.4, 0.8, 15.3],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": .2,
    "scaleY": .2,
    "scaleZ": .2

  }, // end Robot    16
  { // Bullet.     16
    "material": {"ambient": [0.2, 0.0, 0.0], "diffuse": [.8,0,0], "specular": [0.8,0.0,0.0], "n":11},
    "vertices": [[-0.1, 0, 2.01],[0.1, 0, 2.01],[0, 0.1, 2.01],[0, -0.1, 2.01]],
    "normals": [[0, 0, -1],[0, 0, -1],[0, 0, -1], [0, 0, -1]],
    "triangles": [[0,1,2], [0,1,3]],
    "jtransVec": [1.4, 0.8, 15.3],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": .2,
    "scaleY": .2,
    "scaleZ": .2

  }, // end Robot    16

  { // Bullet.     16
    "material": {"ambient": [0.2, 0.0, 0.0], "diffuse": [.8,0,0], "specular": [0.8,0.0,0.0], "n":11},
    "vertices": [[-0.1, 0, 2.01],[0.1, 0, 2.01],[0, 0.1, 2.01],[0, -0.1, 2.01]],
    "normals": [[0, 0, -1],[0, 0, -1],[0, 0, -1], [0, 0, -1]],
    "triangles": [[0,1,2], [0,1,3]],
    "jtransVec": [1.4, 0.8, 15.3],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": .2,
    "scaleY": .2,
    "scaleZ": .2

  }, // end Robot    16
  { // Bullet.     16
    "material": {"ambient": [0.2, 0.0, 0.0], "diffuse": [.8,0,0], "specular": [0.8,0.0,0.0], "n":11},
    "vertices": [[-0.1, 0, 2.01],[0.1, 0, 2.01],[0, 0.1, 2.01],[0, -0.1, 2.01]],
    "normals": [[0, 0, -1],[0, 0, -1],[0, 0, -1], [0, 0, -1]],
    "triangles": [[0,1,2], [0,1,3]],
    "jtransVec": [1.4, 0.8, 15.3],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": .2,
    "scaleY": .2,
    "scaleZ": .2

  }, // end Robot    16
  { // Bullet.     16
    "material": {"ambient": [0.2, 0.0, 0.0], "diffuse": [.8,0,0], "specular": [0.8,0.0,0.0], "n":11},
    "vertices": [[-0.1, 0, 2.01],[0.1, 0, 2.01],[0, 0.1, 2.01],[0, -0.1, 2.01]],
    "normals": [[0, 0, -1],[0, 0, -1],[0, 0, -1], [0, 0, -1]],
    "triangles": [[0,1,2], [0,1,3]],
    "jtransVec": [1.4, 0.8, 15.3],
    "rotateXRad": 0,
    "rotateYRad": 0,
    "rotateZRad": 0,
    "scaleX": .2,
    "scaleY": .2,
    "scaleZ": .2

  }, // end Robot    16




];

/*
{
  "material": {"ambient": [0.1,0.1,0.1], "diffuse": [0.6,0.4,0.4], "specular": [0.3,0.3,0.3], "n":11},
  "vertices": [[0.15, 0.6, 0.75],[0.25, 0.9, 0.75],[0.35,0.6,0.75]],
  "normals": [[0, 0, -1],[0, 0, -1],[0, 0, -1]],
  "triangles": [[0,1,2]]
},
*/
