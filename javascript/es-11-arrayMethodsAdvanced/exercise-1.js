

function adultFilter(persons){
    const adultPeople = persons.filter(person => person.age >= 18);
    return adultPeople;
}

//  ALTERNATIVE METHOD

/* function adultFilter(persons) {
  const adults = [];
  for(let i = 0; i < persons.length; i++) {
    if(persons[i].age >= 18) {
      adults.push(persons[i]);
    }
  }
  return adults;
} */

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);


// # Array Methods - Exercise 53

// Create a function called `adultFilter` that takes in an array of people and returns the ones who are of age.


