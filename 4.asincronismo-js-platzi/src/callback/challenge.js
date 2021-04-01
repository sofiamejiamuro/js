// Se debe instalar xmlhttprequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const url = 'https://rickandmortyapi.com/api/character/'

function fetchData(url, callback){
  let xhttp = new XMLHttpRequest();
  // .open(tipo de peticion, url, se activa el asincronismo)
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange = function(event){
    if(xhttp.readyState === 4){
      if(xhttp.status === 200){
        // el estandar es que el primer parametro del callback, en el estandar js es el error

         // Si se ocupa el return o se manda llamar la funcion callback da el mismo resultado, el uso del return acaba la función
        // return callback(null, JSON.parse(xhttp.responseText))
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error('Error en la url:' + url);
        // el segundo parametro es el resultado
        // callback(error, null)
        return callback(error, null)
      }
    } 
  };
  xhttp.send();
};

fetchData(url, function(error1, data1){
  if(error1) return console.error(error1);
  console.log('data1',data1); // Es la informacion de todos los caracteres

  // Se necesita otroa petición para, a aprtir de el objeto obtenido (data1) para obtener mñas información
  fetchData(url + data1.results[0].id, function(error2, data2){
    if(error2) return console.error(error2) 
    console.log('data2',data2); // Obtiene una segunda informacion, la info especifica del caracter segun el id

    // Una petición más para obtener la localicación
    fetchData(data2.origin.url, function(error3, data3){
      if(error3) return console.error(error3)
      console.log('data3',data3)
      // Accede a toda lainfo de todas las peticiones
      console.log(data1.info.count)  
      console.log(data2.name)  
      console.log(data3.dimension)  
    });
  }); 
});

