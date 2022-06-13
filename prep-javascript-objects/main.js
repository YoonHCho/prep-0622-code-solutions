const person = {
  firstName: 'Yoon',
  lastName: 'Cho',
  hobby: 'Hiking'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s full name is:', fullName);

person.job = 'CEO';
console.log('The person\'s job is:', person.job);

person.previousJob = 'CEO to be';
console.log('The person\'s previous job was:', person.previousJob);

console.log('The complete information of the person:', person);
