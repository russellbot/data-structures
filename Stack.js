class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
  
class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
  
    peek() {
        return this.top;
    }
  
    push(value){
        let newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else if (this.length === 1) {
            this.bottom = this.top;
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }
  
    pop(){
        if (!this.top) {
            return 'Stack is Empty';
        } 
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
        
    }
  
    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}
  
const myStack = new Stack();
  
myStack.peek();

myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');

