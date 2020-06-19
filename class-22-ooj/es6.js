// es6 class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    console.log(this.firstName + ' ' + this.lastName);
  }
}

const person1 = new Person('khalil', 'Rahman');

console.log(person1.fullName());

class Student extends Person {
  constructor(firstName, lastName, course) {
    super(firstName, lastName);
    this.studentWithCourse = course;
  }
}

const student = new Student('Monjur', 'Hasan', 'JavaScript');

console.log(student.fullName());
