const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage(user) {
  const userJSON = JSON.stringify(user);
  localStorage.setItem('user', userJSON);
}

saveUserToLocalStorage(user);

function getUserFromLocalStorage() {
  const userJSON = localStorage.getItem('user')
  if(userJSON) {
    const user = JSON.parse(userJSON)
    return user;
  }
}

console.log(getUserFromLocalStorage());
