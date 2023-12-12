//! Public
// class User {
// 	public username: string = "web";
// 	public password: number = 12345678;
// }
// class Student extends User {
// 	public course: number = 3;
// }
// let user: User = new User();
// let student: Student = new Student();
// console.log(student.);

//! Private
// class User {
//   public username: string = "web";
//   private password: number = 12345678;
//   showPassword(): void {
//     console.log(this.password);
//   }
// }
// class Student extends User {
//   public course: number = 3;
// }
// let user: User = new User();
// let student: Student = new Student();
// user.showPassword();

//! Protected
// class User {
//   public username: string = "web";
//   protected password: number = 12345678;
// }
// class Student extends User {
//   showPassword(): void {
//     console.log(this.password);
//   }
// }
// let student: Student = new Student();
// student.showPassword();
// let student: Student = new Student();

//! ReadOnly
// class User {
// 	username: string = "user";
// 	readonly password: number = 12345678;
// }
// let user: User = new User();
// user.password = 87654321;