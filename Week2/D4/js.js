// API = servidor que me va a dar datos.
// Al proceso de pedirle info a una API se le llama Request.
// Para pedir datos, tengo que entrar en una url.

// ¿Cómo hacer un request?
// let pokemon = null;

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((response) => {
//     if (!response) {
//       throw new Error("No se pudo conectar con el servidor");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     //Aquí aplicamos generalmente la lógica
//     // console.log(data);
//     pokemon = data;
//     // console.log(pokemon);
//   })
//   .catch((error) => {
//     console.log("Error: " + error);
//   });

// // El problema de los datos asíncronos.
// console.log(pokemon);
// setTimeout(() => console.log(pokemon), 1000)

// Herramientas útiles: los timers o temporizadores
// 1ª nº de repeticiones -> for, while...
// 2ª cada cuánto se repite -> setInterval(función, tiempo de repetición)
// 3ª cuánto tarda en ejecutarse -> setTimeout(función, tiempo de delay)
// Nosotros hoy vamos a trabajar con el 2º y el 3º.

/*
    let x-> Declárame una variable de nombre x
    = 0; -> Asígnale el valor 0
    function updateCount() -> Cada vez que llames a updateCount quiero que hagas
    { lógica } -> esta lógica
    setInterval(función, x) -> Ejecuta la función cada x tiempo
    () => { lógica } -> Créame una función que ejecute esta lógica
*/
// let count = 0;

// function updateCount(){
//     count++;
//     console.log("Contador: " + count);
// }
// let intervalId = setInterval(updateCount, 1000);

// // setTimeout( cerrarIntervalo, 5000);
// setTimeout( () => {
//     clearInterval(intervalId);
//     console.log("Fin del conteo");
// }, 5000)
// setTimeout -> Ponme un temporizador de X
// setInterval -> Ejecuta cada X tiempo.

function request(url, callback) {
  setTimeout(() => {
    let data = "Datos obtenidos de " + url;
    callback(data);
  }, 1000);
}

// DRY -> Don't Repeat yourself
// KISS -> Keep it simple, stupid
// Si quiero kiss debo repetir código. ¿Qué prevalece?

// Callback hell aún más grande con más llamadas anidadas
// request("https://ejemplo.com", function (data1) {
//   console.log(data1);
//   request("https://otroejemplo.com", function (data2) {
//     console.log(data2);
//     request("https://otroejemplo.com/datos", function (data3) {
//       console.log(data3);
//       request("https://otroejemplo.com/masdatos", function (data4) {
//         console.log(data4);
//         request("https://otroejemplo.com/finaldatos", function (data5) {
//           console.log(data5);
//           request("https://otroejemplo.com/extra", function (data6) {
//             console.log(data6);
//             request("https://otroejemplo.com/masextra", function (data7) {
//               console.log(data7);
//               // Y así sucesivamente...
//             });
//           });
//         });
//       });
//     });
//   });
// });

// Las promesas
// Un objeto que puede tener tres estados.
/*
Pendiente (pending) -> Aún no resuelta
Resuelta (fulfilled) -> Ha sido un éxito
Rechazada (rejected) -> Ha sido un fracaso total y absoluto.

Importante! Una vez está resuelta o rechazada, ya no cambia de valor.
*/
// Cómo crear una promesa: let miPromise = new Promise(() => {})

// let miPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let exito = true; //Si quieres provocar un fallo, ponlo en false;
//     if (exito) {
//       resolve("La operación ha salido fetén.");
//     } else {
//       reject("La operación ha salido fatal.");
//     }
//   }, 2000);
// });
// // console.log(miPromise);

// miPromise
//   .then((mensaje) => {
//     console.log("Éxito: " + mensaje);
//   })
//   .catch((error) => {
//     console.log("Error: " + error);
//   });

// fetch es una promesa :)
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => {
    if (!response) {
      throw new Error("No se pudo conectar con el servidor");
    }
    return response.json();
  })
  .then((data) => {
    //Aquí aplicamos generalmente la lógica
    // console.log(data);
    pokemon = data;
    // console.log(pokemon);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

// Como hay un fetch es asíncrona. Ponemos el async
// Delante del fetch SIEMPRE va un await
// Delante del .json() SIEMPRE va un await
// Si pones un await donde no corresponde, no pasa absolutamente nada.

async function obtainData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const traducir = await response.json();
    console.log(traducir);
    pokemon = traducir.name;
  } catch (err) {
    console.log("Algo ha ido mal");
  }
}

obtainData();
