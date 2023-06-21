
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
  .catch((err) => console.log(err))
  .finally(() => console.log('complete!'))

