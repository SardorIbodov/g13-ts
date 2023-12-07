"use strict";
//! 1
// class Person {
//   _name: string = "web";
//   _age: number = 20;
// }
// let person1: Person = new Person();
// console.log(person1);
//! 2
// class Person {
// 	constructor(name: string, age: number) {
// 		this._name = name;
// 		this._age = age;
// 	}
//   _name: string;
//   _age: number;
// }
// let person1: Person = new Person("webbrain", 2020);
// console.log(person1);
//! 3
// class Person {
// 	constructor(name: string, age: number) {
// 		this._name = name;
// 		this._age = age;
// 	}
//   _name: string;
//   _age: number;
// 	getInfo(): string {
// 		return `${this._name} - ${this._age} yoshda`
// 	}
// }
// let person1: Person = new Person("webbrain", 3);
// console.log(person1.getInfo());
//! 4
// class Person {
// 	static _name: string = "web";
// 	static getName(): void {
// 		console.log(this._name);
// 	}
// }
// let person1: Person = new Person();
// Person.getName();
//! 5
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get information() {
        return this._name;
    }
    set changeAge(newAge) {
        this._age = newAge;
    }
}
let person1 = new Person("webbrain", 3);
person1.changeAge = 4;
console.log(person1);
