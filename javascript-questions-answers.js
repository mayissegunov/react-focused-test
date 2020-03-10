/**
 * Javascript answers
 */

/**
 * 1) My favourite new javascript feature is Template
 */

const first = 'Lorem';
const last = 'Ipsum';
const message = `Hi, my name is ${first} ${last}.`;
console.log(`Received: ${JSON.stringify(message)}`);

/**
 * 2) They’re so handy and make your code more readable
 */

// whit ``
const firstName = 'Lorem';
const lastName = 'Ipsum';
const fatherName = 'Test';
const age = 25;
const fullName = `Hi, my full name is ${firstName} ${fatherName} ${lastName}.And my age is ${age}.`;
console.log(`Answer: ${fullName.toUpperCase()}`);

// without ``

const fullName = 'Hi, my full name is '+firstName+' '+fatherName+' '+lastName+'.And my age is '+age+'.';

/**
 * 3) They have two main deference.
 */

// First, they have a simpler and more beautiful syntax than traditional function expressions
const numbers = [1, 2, 3];
const sqNumbers1 = numbers.map(x => x * x);
// Traditional function expression:
const sqNumbers2 = numbers.map(function (x) { return x * x });

// Second, In short, with arrow functions there are no binding of this.. Therefore, we don’t need bind() or that = this, anymore.

class Class {
    UiComponent() {
        const button = document.getElementById('myButton');
        button.addEventListener('click', () => {
            console.log('CLICK');
            this.handleClick(); // lexical `this`
        });

    }

    handleClick() {

    }
}


/**
 * 4) Deference is.
 */

var foo = 1;
var j = ++foo;  // pre-increment:  j equals 2; i equals 2
var k = foo++;  // post-increment: k equals 2; i equals 3

/*
  const foo = 1;
  myFunctionCall(++foo) and myFunctionCall(foo++)
  So in the first function, the first argument is 1, and in the second 2
*/

/**
 * 5) Class vs Function
 */

/*
The syntax is more clear and less error-prone
The syntax is also way more clean and easier to understand
Setting up inheritance is really easy
You can inherit from Array, which wasn’t possible before
In a subclass, calling a parent’s function is very easy: just type super.nameOfTheFunction() and you’re good to go
Doesn’t allow you to instantiate the class without the new keyword
*/
