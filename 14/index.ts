//! 
// type A<T extends string | number> = T;

// let a: A<string> = "webbrain";
// let b: A<number> = 2020;
// let c: A<boolean> = false;

//!
// type A<T> = T extends string ? T : any;

// let a: A<string> = "web"; 
// let b: A<number> = 123;
// let c: A<"s" | "m" | "l" | "xl"> = "s";