// LIFO - Last in First Out method

// Stack class

class Stack {

  constructor() {
    this.stack = [];
  }

  // Push method: This method add an element at the top of the stack
  pushIntoStack(value) {
    this.stack.push(value);
  }

  // pop method: This method returns the topmost element of stack and removes it. Return underflow when called on an empty stack
  popFromStack() {

    if (this.stack.length === 0) {
      return 'Underflow';
    } else {
      return this.stack.pop();
    }
  }

  // peek method: It Return the topmost element without removing it from the stack.
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // isEmpty method: Returns true if the stack is empty.
  isEmpty() {
    return this.stack.length == 0;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + " ";
  
    }
    return str;
  }
}


// Creating object for stack class
let stack1 = new Stack();
console.log(stack1.isEmpty()); // true
console.log(stack1.popFromStack());  // Underflow

// Adding element to the stack
stack1.pushIntoStack(10);
stack1.pushIntoStack(20);
stack1.pushIntoStack(30);
stack1.pushIntoStack(40);

console.log(stack1.printStack());

console.log(stack1.peek());

console.log(stack1.popFromStack());

console.log(stack1.printStack());
