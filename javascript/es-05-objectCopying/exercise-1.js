const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = 'Simon';

// Essendo firstname una variabile assegnata ad un oggetto, non contiene dati effettivi ma solo un riferimento (passaggio per riferimento) all'indirizzo di memoria dei dati. In questo caso, person2 é la copia dei riferimenti all'indirizzo di memoria di person1 e modificare uno, modificherá entrambi. In altre parole, non sono delle vere copie. 

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
