//! unknown vs any, type o'zgartirish
// let a: unknown = 20.197;
// console.log((a as number).toFixed(1));
// console.log((<number>a).toFixed(1));

//! union
//? 1
// let a: number | string | boolean = 12;
// a = "web";
// a = true
//? 2
// function getSquare(param: string | number): number {
// 	return typeof param === "string" ? (+param) ** 2 : param ** 2;
// }
// console.log(getSquare(2));
// console.log(getSquare("3"));

//! literals
// let size: "s" | "m" | "l" | "xl";
// size = "s";

//! type aliases
// type User = { name: string; age: number; isGraduated: boolean };
// let user1: User = { name: "web", age: 20, isGraduated: false };
// let user2: User = { name: "web2", age: 22, isGraduated: true };
//?
// type InputValue = number | string;

