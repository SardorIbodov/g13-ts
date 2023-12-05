"use strict";
//! Function declaration
// function pow(x: number, y: number): number {
// 	return x ** y;
// }
// pow(4, "3");
//! Arrow function
// const pow = (x: number, y: number): number => x ** y;
//! Void function (Returnga qaytmaydigan function)
// const sayHi = (name: string): void => {
// 	console.log(`Hi ${name}`);
// }
// sayHi("web");
//! Never function (Oxirgi qiymatga erishmaydigan function)
// const sendError = (arg: string): never => {
// 	throw new Error(arg);
// 	while(true) {
// 		console.log(3);
// 	}
// }
//! Signature function
// let sum: (x: number, y: number) => number;
// function multiply(x: number, y: number): number;
// function multiply(a: number, b: number) {
// 	return a * b;
// }
//! Overload function
// function getInfo(name: string): string;
// function getInfo(name: string, age: number): string;
// function getInfo(name: string, age?: number): string {
//   if (age === undefined) return `Salom ${name}`;
//   return `${name} - ${age} yoshda`;
// }
// console.log(getInfo("Asadbek", 18));
