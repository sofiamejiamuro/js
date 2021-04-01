const somethingWillHappen = () => {
  return new Promise((resolve,reject) => {
    if(true){
      resolve('Promesa resuelta 1')
    } else {
      reject('Promesa NO resuleta')
    }
  });
};

// console.log(somethingWillHappen())
// Promise { 'Promesa resuleta' }
// Promise { <rejected> 'Promesa NO resuleta' }

somethingWillHappen()
  .then(resp => console.log(resp))
  .catch(err => console.log(err))

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if(true){
      setTimeout(() => {
        resolve('Promesa resuelta 2')
      }, 2000)
    } else {
      const error = new Error('NO se pudo resolver la promesa')
      reject(error)
    }
  })
}

somethingWillHappen2()
  .then(resp => console.log(resp))
  .catch(err => console.log(err))

// Promesas encadenas usando promise.all() cuyos parametros son las promesas a ejecutar
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(resp => {
    // La respuesta va a ser un arreglo de respuestas
    console.log(resp)
  })
  .catch(err => {
    console.log(err)
  })


// Al ejecutar las dos promesas con el método Promise.all(), la respuesta llega al mismo tiempo, a diferencia de ejecutarlas por separado  