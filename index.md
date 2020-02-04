<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Prog 3: Rasterization Shell</title>

    <script type="text/javascript" src="gl-matrix-min.js"></script>
    <script type="text/javascript" src="inputs.js"></script>
    <script type="text/javascript" src="init_grid.js"></script>
    <script type="text/javascript" src="helper.js"></script>
    <script type="text/javascript" src="rasterize.js"></script>
  </head>

  <body onload="main();">
    <canvas id="myWebGLCanvas" width="512" height="512"></canvas>
    <p>Use wasd to maneuver blue shape.</p>
    <p>Press spacebar to shoot.</p>
    <p>Don't run into walls, red bullets, green robots.</p>
    <p>Try to kill all the evil green roboots.</p>

  </body>
</html>
