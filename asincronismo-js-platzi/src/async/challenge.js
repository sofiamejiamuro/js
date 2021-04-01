const fetchData = require('../utils/fetchData');
const api = 'https://rickandmortyapi.com/api/character/'



// Hay que hacer tres peticiones
// 1. Información de todos los personajes
// 2. Toda la información de un personje en específico
// 3. Localización de un personaje en especifico


const asyncFunction = async (url_api) => {
  try {
    const data1 = await fetchData(url_api)
    console.log(data1);
    const data2 = await fetchData(`${url_api}${data1.results[0].id}`)
    console.log(data2);
    const data3 = await fetchData(data2.origin.url)
    console.log(data3);

    // Se puede acceder al valor de todas las responses de las requests como en las callbacks, a diferencia de las promesas
    console.log(data1.info.count)  
    console.log(data2.name)  
    console.log(data3.dimension)  
  } catch(error) {
    console.error(error);
  }
}

asyncFunction(api)