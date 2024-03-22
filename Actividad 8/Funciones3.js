<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8"/>
  <title>Choose Name: Improved Task 1</title>
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

    // creamos la funcion random para generar un numero aleatorio dentro de los limites especificados
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // la funcion chooseName ahora toma un parametro que le permite ser mas flexible al elegir el nombre 
    function chooseName(namesArray) {
      const randomIndex = random(0, namesArray.length - 1);
      return namesArray[randomIndex];
    }

    // Se imprime el nombre aleatorio en el párrafo
    para.textContent = chooseName(names);
  </script>
</body>
</html>
