# ¿Qué es MirageJS?

Es una forma de falsear una API. Usando MirageJS podremos poner a prueba nuestro código sin necesidad de que haya un back real que nos sirva los datos.

## ¿Cómo usar MirageJS?

1. Crea tu proyecto de vue
2. Crea en src un directorio que se llame /mocks
3. Crea en /mocks un archivo que se llame index.js
4. Instala mirageJS usando el comando "npm add miragejs"
5. Crea un archivo server.js en la carpeta /src del proyecto y dentro de él:
   1. Importa createServer y Model desde miragejs.
   2. Exporta la función llamada "makeServer".
   3. Crea las rutas relevantes dentro de "routes".
      Puedes ver un ejemplo de todo esto en el archivo index del proyecto asociado a estos apuntes.
6. En el archivo main.js creamos el vínculo con el server.

```javascript
//Nos traemos el servidor que hemos hecho en el archivo .server
import { makeServer } from "./server";

//A veces querremos montar el servidor falso solo si estamos en modo desarrollo, para ello se suele usar esta línea de código.
if (process.env.NODE_ENV === "development") {
  makeServer();
}
```

7. Llamamos al servidor desde algún componente o store.
   1. Si quieres ver un ejemplo de llamada en componente ve a "/components/CallToServer.vue"
   2. Si quieres ver un ejemplo de llamada en store ve a /store/UserStore.js y /components/UserComponent.vue

```javascript
import { ref, onMounted } from "vue";

const users = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("/api/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    users.value = data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});
```

Recuerda que las rutas sirven para crear, leer, actualizar y borrar cualquier dato del back.
A este efecto de poder hacer esas 4 cosas se lo conoce como CRUD por sus siglas en inglés: Create, Read, Update and Delete.

Si deseas añadir nuevas rutas, por ejemplo, para crear usuarios, te he puesto en la store un ejemplo de cómo hacerlo. 