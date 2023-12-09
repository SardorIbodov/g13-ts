"use strict";
class Person {
    constructor(name, age) {
        this._name = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
}
class Student extends Person {
    constructor(name, age, course, group) {
        super(name, age);
        this._course = 0;
        this._group = "";
        this._course = course;
        this._group = group;
    }
    info() {
        return `Assalomu alaykum, mening ismim ${this._name}`;
    }
}
let student = new Student("Sardor", 20, 4, "210uz");
console.log(student);
console.log(student.info());
