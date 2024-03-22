<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8"/>
  <title>Loops: Task 3</title>
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

<script>
  let i = 500;
  const para = document.createElement('p');

  function isPrime(num) {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }

  // Bucle while para encontrar números primos
  while (i >= 2) {
    if (isPrime(i)) {
      para.textContent += `${i}, `;
    }
    i--;
  }

  // Agregamos el texto al párrafo y al section
  const section = document.querySelector('section');
  para.textContent = para.textContent.slice(0, -2); // Eliminamos la última coma y espacio
  section.appendChild(para);
</script>

</body>
</html>
