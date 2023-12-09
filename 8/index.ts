// interface IPerson {
// 	_name: string,
// 	_age: number,
// 	info: () => string,
// 	// info(): string,
// }

// type IPerson = {
//   _name: string;
//   _age: number;
//   info: () => string;
// };

//! 1
// type IPerson = {
//   _name: string;
//   _age: number;
//   info: () => string;
// };
// type IPerson = {
//   _name: string;
//   _age: number;
//   info: () => string;
// };

// interface IPerson {
// 	_name: string,
// 	_age: number,
// 	// info(): string,
// }
// interface IPerson {
// 	info: () => string,
// 	// info(): string,
// }

// class Person implements IPerson {
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

//! 2
// interface IPerson {
//   _name: string;
//   _age: number;
// }
// interface IStudent extends IPerson {
// 	_course: number,
// 	_group: string, 
// }

// class Person implements IPerson {
//   _name: string = "";
//   _age: number = 0;
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
// }
// class Student extends Person implements IStudent {
//   _course: number = 0;
//   _group: string = "";
//   constructor(name: string, age: number, course: number, group: string) {
//     super(name, age);
//     this._course = course;
//     this._group = group;
//   }
// }
// let person = new Person("Sardor", 20);
// let student = new Student("Sardor", 20, 4, "210uz");
// console.log(person);
// console.log(student);

//! 3
// interface IPerson {
// 	name: string,
// 	age: number
// }
// let person: IPerson = {name: "Sardor", age: 20};
// console.log(person);
 