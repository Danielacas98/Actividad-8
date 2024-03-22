<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8"/>
  <title>Draw Rectangle: Task 2</title>
</head>

<body>
  <canvas id="canvas" width="400" height="300"></canvas>

  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const x = 50;
    const y = 60;
    const width = 100;
    const height = 75;
    const color = 'blue';

    // creamos una funcion drawRectangle que borra el lienzo y luego dibuja un rectangulo en el canvas utilizando las caracteristicas dadas
    function drawRectangle(x, y, width, height, color) {
      // Borrar el lienzo antes de dibujar
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar el rectángulo
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }

    // Llamamos a la función drawRectangle con los parámetros proporcionados
    drawRectangle(x, y, width, height, color);
  </script>
</body>
</html>
