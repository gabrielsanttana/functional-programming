//Mutability:
let languages1 = ['English', 'Portuguese', 'Spanish'];

languages1[2] = 'Franch';

console.log(languages1);

//Immutability:
let languages2 = ['English', 'Portuguese', 'Spanish'];

const newLanguages = languages2.map((language) =>
  language === 'Spanish' ? 'Franch' : language,
);

console.log(newLanguages);
