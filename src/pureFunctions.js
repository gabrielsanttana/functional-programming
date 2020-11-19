//Not pure:
let name = 'World';

function inpureGreet() {
  console.log('Hello, ' + name + '!');
}

inpureGreet();

name = 'Brazil';

inpureGreet();

//Pure:
function pureGreet(name) {
  return 'Hello, ' + name + '!';
}

console.log(pureGreet('World'));

//Not pure:
let person = {name: 'Gabriel', lastName: 'Santana'};

function inpureChangeLastName(newLastName) {
  person.lastName = newLastName;
}

inpureChangeLastName('Gomes');

//Pure:
function pureChangeLastName(person, newLastName) {
  return {name: person.name, lastName: newLastName};
}

pureChangeLastName(person, 'Gomes');
