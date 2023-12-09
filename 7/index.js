"use strict";
//! 1
// class Person {
//   _name: string = "";
//   _age: number = 0;
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
// }
// class Student extends Person {
//   _course: number = 0;
//   _group: string = "";
//   constructor(name: string, age: number, course: number, group: string) {
//     super(name, age);
//     this._course = course;
//     this._group = group;
//   }
// }
// let sardor: Person = new Person("Sardor", 20);
// console.log(sardor);
// let sardor: Student = new Student("Sardor", 20, 4, "210uz");
// console.log(sardor);
//! 2
// class Person {
//   _name: string = "";
//   _age: number = 0;
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
//   info(): string {
//     return `Assalomu alaykum, mening ismim ${this._name}`;
//   }
// }
// class Student extends Person {
//   _course: number = 0;
//   _group: string = "";
//   constructor(name: string, age: number, course: number, group: string) {
//     super(name, age);
//     this._course = course;
//     this._group = group;
//   }
//   info(): string {
//     let infoPerson = super.info();
//     return `${infoPerson}, men ${this._course} kursda, ${this._group} guruhda o'qiyman!`;
//   }
// }
// let sardor = new Student("Sardor", 20, 4, "210uz");
// console.log(sardor.info());
