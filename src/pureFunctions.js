//Not pure:
let name = 'World';

function inpureGreet() {
  console.log('Hello, ' + name + '!');
}

inpureGreet(); //Hello, World!

name = 'Brazil';

inpureGreet(); //Hello, Brazil!

//Pure:
function pureGreet(name) {
  return 'Hello, ' + name + '!';
}

console.log(pureGreet('World')); //Hello, World!

//Not pure:
let person = {name: 'Gabriel', lastName: 'Santana'};

function inpureChangeLastName(newLastName) {
  person.lastName = newLastName;
}

inpureChangeLastName('Gomes'); // {name: 'Gabriel', lastName: 'Gomes'}

//Pure:
function pureChangeLastName(person, newLastName) {
  return {name: person.name, lastName: newLastName};
}

pureChangeLastName(person, 'Gomes'); //{name: 'Gabriel', lastName: 'Gomes'}
