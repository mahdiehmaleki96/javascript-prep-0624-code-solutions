const person = {
  firstname: 'Mahdieh',
  lastname: 'Maleki',
  hobby: 'reading , hiking , and swimming',
};
console.log(
  '{firstname:',
  person.firstname + ' ' + 'lastname:' + ' ' + person.lastname + ' ' + 'hobby:',
  person.hobby + '}'
);
const fullName = person.firstname + ' ' + person.lastname;
console.log('the person name is:', fullName);
person.job = 'software Engineer';
console.log('the person current job is:' + ' ' + person.job);
person['previousJob'] = 'Teacher';
console.log('the person previous job is:' + ' ' + person.previousJob);
console.log('the complete person object:', person);
