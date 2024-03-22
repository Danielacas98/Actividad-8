<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8"/>
  <title>Events: Task 3</title>
  <style>
    p {
      color: purple;
      margin: 0.5em 0;
    }

    * {
      box-sizing: border-box;
    }

    button {
      display: block;
      margin: 20px 0 20px 20px;
    }

    .button-bar {
      padding: 20px 0;
    }
  </style>
  <link rel="stylesheet" href="../styles.css" />
</head>

<body>

  <section class="preview">
  </section>

  <div class="button-bar">
    <button data-color="red">Rojo</button>
    <button data-color="yellow">Amarillo</button>
    <button data-color="green">Verde</button>
    <button data-color="purple">Morado</button>
  </div>

  <script>
    const buttonBar = document.querySelector('.button-bar');

    // Se agrego un controlador de eventos al elemento contenedor 
    buttonBar.addEventListener('click', (event) => {
      // revisamos si el elemento clicado es un boton 
      if (event.target.tagName === 'BUTTON') {
        const color = event.target.dataset.color; // Obtenemos el color del atributo data-color
        buttonBar.style.backgroundColor = color; // Establecemos el color de fondo de button-bar
      }
    });
  </script>
</body>
</html>
