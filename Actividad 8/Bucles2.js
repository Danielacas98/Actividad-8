<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8"/>
  <title>Loops: Task 2</title>
  <style>
    p {
      color: purple;
      margin: 0.5em 0;
    }

    * {
      box-sizing: border-box;
    }
  </style>
  <link rel="stylesheet" href="../styles.css" />
</head>

<body>

<section class="preview">

</section>

</body>
<script>
  const name = 'Mustafa';
  const para = document.createElement('p');

  const phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
  ]

  // Buscamos el nombre en el phonebook y mostramos el nombre y número de teléfono correspondiente
  for (const contact of phonebook) {
    if (contact.name === name) {
      para.textContent = `Nombre: ${contact.name}, Número de Teléfono: ${contact.number}`;
      break; // Salir del bucle una vez que se encuentra el nombre
    }
  }

  // Agregamos el párrafo al section
  const section = document.querySelector('section');
  section.appendChild(para);
</script>

</html>
