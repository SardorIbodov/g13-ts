//! # === private
// class Person {
// 	_name: string = "webbrain";
// 	#password: number = 12345678;
// }
// let person: Person = new Person();
// console.log(person["#password"]);

//!
// namespace Utils {
// 	export function sayHi(name: string): void {
// 		console.log(`Hi ${name}`);
// 	}
// }
// Utils.sayHi("webbrain");

//! Dynamic Type aliases => Generics with Type
// type A<T> = T;
// type B = A<string>;

// let a: A<string> = "webbrain";
// let b: A<number> = 12345678;
// let c: A<{name: string, age?: number}> = {name: "webbrain", age: 4}
// let c: A<{name: string | null}> = {name: null}
// let d: A<(element: number) => number> = (element: number): number => {
// 	return element ** 2;
// }
// console.log(d(5));

//! Generics with Function
// function echo<T>(element: T): T {
// 	return element;
// }
// console.log(echo<number>(1));
// console.log(echo<string>("Salom"));

//! Generics with Classes
// class List<T> {
//   elements: T[] = [];
//   add(element: T): void {
//     this.elements.push(element);
//   }
// }
// let list1: List<string> = new List();
// list1.add("web");
// list1.add("brain");
// list1.add("aca");
// list1.add("demy");
// console.log(list1);
// let list2: List<number | string> = new List();
// list2.add(1);
// list2.add(2);
// list2.add(3);
// list2.add(4);
// list2.add("5");
// list2.add("6");
// console.log(list2);

//! Generics with Interfaces
//  
