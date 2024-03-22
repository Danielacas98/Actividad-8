<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8"/>
  <title>Choose Name: Task 1</title>
  <style>
    p {
      color: purple;
      margin: 0.5em 0;
    }

    * {
      box-sizing: border-box;
    }
  </style>
</head>

<body>
  <section id="section">
    <p id="para"></p>
  </section>

  <script>
    const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
    const para = document.getElementById('para');

    // creamos la funcion chooseName() que elige aleatoriamente un nombre de la matriz names y lo asigna al contenido del parrafo para 
    function chooseName() {
      const randomIndex = Math.floor(Math.random() * names.length);
      const randomName = names[randomIndex];
      para.textContent = randomName;
    }

    // Ejecutamos la función chooseName una vez
    chooseName();
  </script>
</body>
</html>
