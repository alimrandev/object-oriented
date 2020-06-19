function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function () {
  console.log(this.firstName + ' ' + this.lastName);
};
const person1 = new Person('Khalil', 'Rahman');

const person2 = new Person('Ariful', 'islam');

console.log(person2);

// inheritance
function Student(firstName, lastName, course) {
  Person.call(this, firstName, lastName);
  this.studentWithCourse = course;
}

const student = new Student('Monjurul', 'Hasan', 'JavaScript');
Student.prototype.__proto__ = Person.prototype;
console.log(student.fullName());
