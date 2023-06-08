/* # Classes

Define a class called `Person` that takes in three parameters in the constructor (`firstName`, `lastName` and `age`). Create the getters and setters methods for each property and a getter method called `fullName` that returns the full name. */


class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age; 
  }


  get firstname() {
    return this._firstName;
    
  }
  get lastName() {
    return this._lastName;

  }
  get age() {
    return this._age;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  
  set firstName(newName) {
    this._firstName = newName;
  }

  set lastName(newSurname) {
    this._lastName = newSurname;
  }

  set age(newAge) {
    this._age = newAge;
  }

  
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);