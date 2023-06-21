/* # Promise chaining

Write a first `promise` that takes as parameter the variable `isLogged` found in the `exercise.js` file.
If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error.
We write a second `promise` that takes a variable of type number as a parameter. If the input parameter is greater than 0.5, in the resolve we must return the following data: `{name: "John", age: 24}`, otherwise we must dispatch an `error`.
Once this is done, try to chain the promises to eventually return the final object `{name: "John", age: 24}`

Tips:

- If in doubt, watch the lesson
- To understand how they work, you can try adding `setTimeout` to the promise functions */



const isLogged = true;

function login(isLogged) {
    return new Promise((resolve, reject) => {
        if(isLogged) {
            resolve(Math.random());
        }
        else reject (new Error('Not logged in!'))
    })
}

function user(number) {
    return new Promise((resolve, reject) => {
        if(number > 0.5) {
            resolve({"name": 'John', "age": 24})
        }
        else reject (new Error('the number is not greater than 0.5'));
    })
}

login(isLogged)
  .then((val) => {
        console.log("Random Number:", val); //volevo si vedesse il numero random
         return user(val);
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
