<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8"/>
  <title>Toggle Button Text: Task</title>
  <style>
    body {
      margin: 0.5em 0;
    }

    * {
      box-sizing: border-box;
    }

    button {
      display: block;
      margin: 20px 0 20px 20px;
    }
  </style>
</head>

<body>

  <section class="preview">
  </section>

  <button class="off">Machine is off</button>

  <script>
    // se agrego el evento de clic al boton que se alterna dependiendo del estado actual de este
    const btn = document.querySelector('.off');
    let isOn = false;

    btn.addEventListener('click', () => {
      if (isOn) {
        btn.textContent = 'Machine is off';
        isOn = false;
      } else {
        btn.textContent = 'Machine is on';
        isOn = true;
      }
    });
  </script>

</body>
</html>
