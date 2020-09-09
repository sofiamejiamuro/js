# Asynchronous JS

Synchronous first, all the instructions are executed one after the other, line by line as they appear in the code
```js
const second = () => {
  console.log('second');
}
const first = () => {
  console.log('Hey there, first!');
  second()
  console.log('the end');
}
```

Async: code that should be executed later

```js
const second = () => {
  setTimeout(() =>{
    console.log('Async,  hey there');
  }, 2000);
};

const first = () => {
  console.log('Hey there, first!');
  second()
  console.log('the end');
};

first()
```

What I expected:
```js
// hey there!
(after two seconds) // async hey there!
//the end
```

What happened is that Async,do not stop the code, in this case, two seconds, do not wait until the other function to finish to start the next one

That is, it is non blocking

![asyn-1](assets/images/async-1.png)


## The Event Loop

![asyn-1](assets/images/sync-async.png)

![asyn-1](assets/images/async-3.png)

![asyn-1](assets/images/async-2.png)


We can use callback funtions differ actions into the future

wait on the message queue 

Event loop is constatly monitoring the message queue and execution stack and push the callback functions
 
![asyn-1](assets/images/event-loop.png)

![asyn-1](assets/images/event-loop-2.png)

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


