/* # Promise

Write a `promise`. If the variable called `number` is greater than 10, then it returns a resolve, otherwise it returns a reject.
Then manage the promise with `then` and `catch` in case of any reject. */


const number = 10;

function promise() {
    return new Promise((resolve, reject) => {
        if(number > 10) {
          resolve('resolved');
        }
        else reject('rejected');
    })
}

promise().then(ris => console.log(ris)).catch(err => console.log(err));