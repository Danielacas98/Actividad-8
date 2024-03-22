<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8"/>
  <title>Filter Names: Task</title>
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
    
    // se reemplazo la funcion isShort con una funcion de flecha dentro del metodo filter 
    const shortNames = names.filter(name => name.length < 5);
    para.textContent = shortNames;

    // Don't edit the code below here!

    section.innerHTML = ' ';

    section.appendChild(para);
  </script>
</body>
</html>
