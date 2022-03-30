// JavaScript Values
// * Primitive Values
let myNumber = 1;
let myString = 'myString';

// * Objects
let myObject = {
    myProperty1: 1,
    myProperty2: 'myStirng',
    myProperty3: { firstName: 'some random text' },
    myProperty4: [1, { foo: 1 }, 'some random text' ],
};

// * Arrays
let mySimpleArray = [10, 20];
//document.writeln('value: ' + mySimpleArray[1])

let myArray = [
    1,
    'some text', 
    {
        property: [{ x: 44 }, []],
    }
];

//document.writeln('x: ' + myArray[2].property[0].x);


// * Functions

let test = function () {
    document.writeln('hello world');
};

//test();

const myFunctions = [
    function () {
        document.writeln('1');
    },
    function () {
        document.writeln('2');
    }
];

// How to call the first function
let myFunction = myFunctions[0];
myFunction();

// Altenatively:
myFunctions[0]();
