<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <title>Bucles 1</title>
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
  <h1>Lista de compras</h1>
  <ul>
    <li>Tomates</li>
    <li>Garbanzos</li>
    <li>Cebollas</li>
    <li>Arroz</li>
    <li>Frijoles negros</li>
  </ul>
</section>

<script>
  const miArray = ['tomates', 'garbanzos', 'cebollas', 'arroz', 'frijoles negros'];
  const lista = document.createElement('ul');

  // Bucle for each a través de miArray y creamos los elementos de la lista
  miArray.forEach(item => {
    const elementoLista = document.createElement('li');
    elementoLista.textContent = item;
    lista.appendChild(elementoLista);
  });

  // Agregamos la lista a la sección
  const seccion = document.querySelector('section');
  seccion.appendChild(lista);
</script>

</body>
</html>



