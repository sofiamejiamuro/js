const fetchData = require('../utils/fetchData');

const url = 'https://rickandmortyapi.com/api/character/'

// Me regresa la promesa
console.log(fetchData(url));

// Hay que hacer tres peticiones
// 1. Información de todos los personajes

fetchData(url)
  .then(data1 => {
    console.log(data1)
    // Una vez obtenida esa data puedo hacer la segunda petición 
    // 2. Toda la información de un personje en específico
    // Este return es la promesa como tal
    return fetchData(`${url}${data1.results[0].id}`)
  })
  .then(data2 => {
    console.log(data2);
    // Retornamos la siguiente promesa que hace la tercer petición
    // 3. Localización de un personaje en especifico
    return fetchData(data2.origin.url)
  })
  .then(data3 => {
    console.log(data3)
    console.log(data3.dimension) 
  })
  .catch(err => console.log(err))

