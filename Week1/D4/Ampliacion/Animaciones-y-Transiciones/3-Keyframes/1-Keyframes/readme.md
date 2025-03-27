
**Ejemplo 1: Cambio de color de texto (from/to)**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo 1</title>
  <style>
    @keyframes colorCambio {
      from {
        color: red;
      }
      to {
        color: blue;
      }
    }
    .animado {
      animation-name: colorCambio;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  </style>
</head>
<body>
  <h1 class="animado">Este texto cambia de color</h1>
</body>
</html>
```html

**Ejemplo 2: Cambio de fondo de un contenedor (0% a 100%)**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo 2</title>
  <style>
    @keyframes fondoCambio {
      0% {
        background-color: yellow;
      }
      100% {
        background-color: orange;
      }
    }
    .cuadro {
      width: 200px;
      height: 200px;
      animation-name: fondoCambio;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      margin: 20px auto;
    }
  </style>
</head>
<body>
  <div class="cuadro"></div>
</body>
</html>
```html

**Ejemplo 3: Rotación infinita**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo 3</title>
  <style>
    @keyframes girar {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .rueda {
      width: 100px;
      height: 100px;
      background-color: #4CAF50;
      margin: 50px auto;
      animation: girar 2s linear infinite;
    }
  </style>
</head>
<body>
  <div class="rueda"></div>
</body>
</html>
```html

**Ejemplo 4: Escalado (zoom in/out)**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo 4</title>
  <style>
    @keyframes escalado {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
    .zoom {
      width: 150px;
      height: 150px;
      background-color: #f44336;
      margin: 20px auto;
      animation: escalado 2s ease-in-out infinite;
    }
  </style>
</head>
<body>
  <div class="zoom"></div>
</body>
</html>
```html

**Ejemplo 5: Movimiento de izquierda a derecha**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo 5</title>
  <style>
    @keyframes mover {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(200px);
      }
    }
    .bola {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #2196F3;
      position: relative;
      animation: mover 2s ease-in-out infinite alternate;
    }
  </style>
</head>
<body>
  <div class="bola"></div>
</body>
</html>
```html

**Ejemplo 6: Opacidad intermitente (parpadeo)**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo 6</title>
  <style>
    @keyframes parpadeo {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
    }
    .texto-parpadeo {
      font-size: 24px;
      text-align: center;
      margin-top: 50px;
      animation: parpadeo 1s infinite;
    }
  </style>
</head>
<body>
  <div class="texto-parpadeo">¡Parpadeo!</div>
</body>
</html>
```html

**Ejemplo 7: Efecto "bounce" (rebote) con múltiples puntos**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo 7</title>
  <style>
    @keyframes rebote {
      0% {
        transform: translateY(0);
      }
      20% {
        transform: translateY(-50px);
      }
      40% {
        transform: translateY(0);
      }
      60% {
        transform: translateY(-30px);
      }
      80% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10px);
      }
    }
    .pelota {
      width: 60px;
      height: 60px;
      background-color: #e91e63;
      border-radius: 50%;
      margin: 50px auto;
      animation: rebote 2s infinite;
      position: relative;
    }
  </style>
</head>
<body>
  <div class="pelota"></div>
</body>
</html>
```html

**Ejemplo 8: Cambio de color de texto en varios pasos**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo 8</title>
  <style>
    @keyframes variosColores {
      0% {
        color: blue;
      }
      25% {
        color: green;
      }
      50% {
        color: red;
      }
      75% {
        color: purple;
      }
      100% {
        color: black;
      }
    }
    .texto-multicolor {
      font-size: 24px;
      text-align: center;
      margin-top: 50px;
      animation: variosColores 4s infinite;
    }
  </style>
</head>
<body>
  <div class="texto-multicolor">Texto con varios cambios de color</div>
</body>
</html>
```html

**Ejemplo 9: Cambio de border-radius (transición de forma)**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo 9</title>
  <style>
    @keyframes cambioForma {
      0% {
        border-radius: 0%;
      }
      50% {
        border-radius: 50%;
      }
      100% {
        border-radius: 0%;
      }
    }
    .caja-forma {
      width: 100px;
      height: 100px;
      background-color: #9c27b0;
      margin: 30px auto;
      animation: cambioForma 3s ease-in-out infinite;
    }
  </style>
</head>
<body>
  <div class="caja-forma"></div>
</body>
</html>
```html

**Ejemplo 10: Rotación y cambio de tamaño simultáneo**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo 10</title>
  <style>
    @keyframes girarYEscalar {
      0% {
        transform: rotate(0deg) scale(1);
      }
      50% {
        transform: rotate(180deg) scale(1.5);
      }
      100% {
        transform: rotate(360deg) scale(1);
      }
    }
    .caja-combo {
      width: 100px;
      height: 100px;
      margin: 40px auto;
      background-color: #ff9800;
      animation: girarYEscalar 3s infinite;
    }
  </style>
</head>
<body>
  <div class="caja-combo"></div>
</body>
</html>
```html

