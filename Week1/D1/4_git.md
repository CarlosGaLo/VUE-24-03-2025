## Cómo usar correctamente git

Esta es una guía sobre cómo usar git. Al principio te mareará, es normal. Pero verás que en poco tiempo podrás identificar tus errores simplemente siguiendo esta guía.

Empieza por descargar todo lo necesario para git. [Decargar aquí](https://git-scm.com/downloads)

La página que usaremos para nuestros repositorios es [github](https://github.com/).

### ¿Qué es git y qué es un repositorio?
Git es un sistema de control de versiones y un repositorio es un sitio donde se guardan dichas versiones.

Esto significa que cuando vayas programando vas a poder guardar un registro de cómo está el desarrollo de tu software y, en caso de que haya un error, poder ir a una versión anterior. 

Imaginate que tienes una página web en buen estado y su verisón

### Cosas que deberías hacer en git

1. Crea un repositorio para cada ejercicio. Así estará todo más ordenado.
2. Crea un repositorio para tus apuntes y mantenlos a parte. Así estará la información más accesible.
3. Confirma que git funciona correctamente en tu ordenador.

### Cosas que NO debes hacer.

1. Nunca debes crear una carpeta git dentro de otra carpeta git.
   1. Por ejemplo: Si tienes una jerarquía de carpetas tal que CarpetaPadre>CarpetaHija, si carpeta padre es un repositorio (tiene una carpeta .git), carpeta hija NO DEBE TENERLA.
2. Nunca hagas un commit con un mensaje que:
   1. Sea demasiado largo
   2. Sea demadiado corto
   3. No sea explícito
   4. Esté en un idioma que no sea inglés
