
// Q.1
// var a = 50;

// {
//   var a = 30;
//   let b = 20;
//   const c = 10
// }

// console.log(a);

// Q.2
// const a = 50;

// {
// var a =30;
// let b = 20;
// let c = 30;

// }

// console.log(a) //Syntax error: 'a' has already been declared


// Q.3
// let a = 50;

// {
//   var a = 30;
//   let b = 20;
//   let c = 30;
// }

// console.log(a);  //Syntax error: 'a' has already been declared

// Q.4
// var a = 50;  // global memory

// function fun() {
//   var a = 30; // it's in the local memory 
//   let b = 20;
//   let c = 39;
// }
// fun();

// console.log(a)  // it prints 50 because var a pointing to the global memory location 

// Q.5

// let a = 50;

// function fun(){

// var a =30;   //var a pointing to the local scoop
// let b = 20;
// let c = 30;

// }

// fun();

// console.log(a)  // shadowing: because let a is pointing to the script scoop 

// Q. 6
// const a = 10;

// {
// var a = 100;
// }

// console.log(a)  // Syntax error: 'a' has already been declared

// Q.7


// const a = 10;  // script scope
// {
// const a = 20;  // block scope
// {
// const a = 50;  // block scope
// console.log(a); // 50
// }
// console.log(a)  // refers to the block scope 20
// }

// console.log(a)  // refers to the script scope 10


// Q. 8

// const a = 10; // script scope

// {

// const a = 20;  // block scope

// {

// console.log(a); // refers to the block scope 20

// }

// console.log(a)  // refers to the block scope 20

// }

// console.log(a)  // refers to the script scope 10



const a = 10;  // script scoop
{
  const a = 20  // block scoop
 console.log(a) 
}
console.log(a);
