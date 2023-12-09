interface IPerson {
  _name: string;
  _age: number;
}
interface IStudent extends IPerson {
  _course: number;
  _group: string;
}

abstract class Person implements IPerson {
  _name: string = "";
  _age: number = 0;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  abstract info(): string;
}
class Student extends Person implements IStudent {
  _course: number = 0;
  _group: string = "";
  constructor(name: string, age: number, course: number, group: string) {
    super(name, age);
    this._course = course;
    this._group = group;
  }
  info(): string {
    return `Assalomu alaykum, mening ismim ${this._name}`;
  }
}
let student = new Student("Sardor", 20, 4, "210uz");
console.log(student);
console.log(student.info());
