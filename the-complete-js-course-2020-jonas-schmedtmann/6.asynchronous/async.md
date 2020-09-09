# Asynchronous JS

synchronoues first, all the instrucctions are executed one after the other, line by line as they appear in the code

const second = () => {
        console.log('second');
      }
      const first = () => {
        console.log('Hey there, first!');
        second()
        console.log('the end');
      }

async

const second = () => {
        setTimeout(() =>{
          console.log('async,  hey there');
        }, 2000);
      }
      const first = () => {
        console.log('Hey there, first!');
        second()
        console.log('the end');
      }
      first()


What I expected:
hey thre
(after two seconst) async hey theere
the enda

What haappened Async, no hace que el codigo se detenga dos segundos, no espera al timer para temrinar
![asyn-1](assets/images/async-1.png)

## The Event Loop


callback funtions differ actions into the future


## ASYNC The old way (CALLBACKS) callback helll
```js
 function getRecipe() {
        // settimeut simulates the server
        setTimeout(() => {
          const recipeID = [523, 883, 432, 974];
          console.log(recipeID);

          setTimeout(id => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
            const recipe2 = {title: 'Italian Pizza', publisher: 'Jonas'};
            console.log(recipe2);
            }, 1000, recipe.publisher);
            
          }, 1000, recipeID[2]); 

        }, 1500);
      }
      getRecipe();
```

To avoid callback hell we use promises
## Revisar the evenloop video otra vez


