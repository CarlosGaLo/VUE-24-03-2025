// Función de ejemplo que simula una solicitud de red. A las solicitudes de red se les llama request, por eso le vamos a poner este nombre.
function request(url, callback) {
  // Simulamos una solicitud de red que toma 1 segundo
  setTimeout(() => {
    // Simulamos que recibimos datos
    let data = "Datos obtenidos de " + url;
    // Llamamos al callback con los datos obtenidos
    callback(data);
  }, 1000);
}

// Callback hell aún más grande con más llamadas anidadas
request("https://ejemplo.com", function (data1) {
  console.log(data1);
  request("https://otroejemplo.com", function (data2) {
    console.log(data2);
    request("https://otroejemplo.com/datos", function (data3) {
      console.log(data3);
      request("https://otroejemplo.com/masdatos", function (data4) {
        console.log(data4);
        request("https://otroejemplo.com/finaldatos", function (data5) {
          console.log(data5);
          request("https://otroejemplo.com/extra", function (data6) {
            console.log(data6);
            request("https://otroejemplo.com/masextra", function (data7) {
              console.log(data7);
              // Y así sucesivamente...
            });
          });
        });
      });
    });
  });
});

// Realizar múltiples solicitudes usando Promise.then()
request('https://ejemplo.com')
    .then(data1 => {
        console.log(data1);
        return request('https://otroejemplo.com');
    })
    .then(data2 => {
        console.log(data2);
        return request('https://otroejemplo.com/datos');
    })
    .then(data3 => {
        console.log(data3);
        return request('https://otroejemplo.com/masdatos');
    })
    .then(data4 => {
        console.log(data4);
        return request('https://otroejemplo.com/finaldatos');
    })
    .then(data5 => {
        console.log(data5);
        return request('https://otroejemplo.com/extra');
    })
    .then(data6 => {
        console.log(data6);
        return request('https://otroejemplo.com/masextra');
    })
    .then(data7 => {
        console.log(data7);
        // Y así sucesivamente...
    })
    .catch(error => {
        console.error('Error:', error);
    });