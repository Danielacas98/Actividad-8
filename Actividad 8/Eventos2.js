<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8"/>
  <title>Events: Task 2</title>
  <style>
    p {
      color: purple;
      margin: 0.5em 0;
    }

    * {
      box-sizing: border-box;
    }

    canvas {
      border: 1px solid black;
    }
  </style>
  <link rel="stylesheet" href="../styles.css" />
</head>

<body>

  <section class="preview">
  </section>

  <canvas id="canvas" width="480" height="320" tabindex="0"></canvas>

  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    function drawCircle(x, y, size) {
      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fill();
    }

    let x = 50;
    let y = 50;
    const size = 30;

    drawCircle(x, y, size);

    // Evento de teclado para mover el círculo, con el evento keydown se detectan las teclas presionadas
    document.addEventListener('keydown', (event) => {
      const step = 10; // Tamaño del paso para mover el círculo

      // switch para verificar la tecla presionada
      switch (event.key) {
        case 'w':
          y -= step;
          break;
        case 'a':
          x -= step;
          break;
        case 's':
          y += step;
          break;
        case 'd':
          x += step;
          break;
      }
      // se llama a la funcion con las nuevas coordenadas para dibujar el circulo 
      drawCircle(x, y, size);
    });
  </script>
</body>
</html>

