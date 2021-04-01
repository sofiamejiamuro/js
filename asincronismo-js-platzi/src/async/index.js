const doSomethingAsyc = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Async function'), 3000)
      : reject(new Error('Error en función async'))
  });
};

const doSomething = async () => {
  const something = await doSomethingAsyc()
  console.log(something); 
};


console.log('Before');
doSomething();
console.log('After');

// Before
// After
// Async function


// ¿Cómo capturar los errores?
const doAnotherThing = async () => {
  try {
    const something = await doSomethingAsyc()
    console.log(something); 
  } catch(error){
    console.error(error);
  }
}

console.log('Before');
doAnotherThing();
console.log('After');


/*
Before
After
Before
After
Async function
Async function
*/ 


