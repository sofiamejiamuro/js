function sum(num1,num2){
  return num1 +num2
};

// Le paso el callbaco como paramtero
function calc(num1, num2, callback){
  // Ejecuto la función con los otrso dos parametros que pasé
  return callback(num1, num2)
};

console.log(calc(2,6,sum));


function date(callback){

  console.log(new Date);

  setTimeout(function(){
    let date = new Date;
    callback(date)
  },3000)

}

function printDate(dateNow){
  console.log(dateNow)
}

date(printDate);


