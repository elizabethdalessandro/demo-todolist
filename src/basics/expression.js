/*
function foo() {
    document.writeln('foo');
    return function() {
        document.writeln('body');
        return 1;
    }
}
const f = foo();
f();
f();
*/

// ----------------------------

function test() {
    document.writeln('test1');
    return function() {
        document.writeln('test2');
        return function() {
            document.writeln('test3');
            return function() {
                document.writeln('test4');
                return 1;
            }
        }
    }
}

let t = test()(); 
t()(); 

let t = test(); 
f = t()()(); 
document.writeln(f)





// Examples:

(function () {
    return function () {
        return 1;
    };
})()()




let test = (function () {
    return function () {
        return 1;
    };
})()()
document.writeln(test)



let test5 = (function () {
    document.writeln("step1")
    return function () {
        return "step2";
    };
})()()
document.writeln(test5)





function test2 () {
    return function () {
        return 2;
    };
}
let test3 = test2()()
document.writeln(test3)





let x = {
    getMessage: function () {
        return 'hello world';
    }
};

let test4 = x.getMessage()
document.writeln(test4)




// evaluation: Making a value out of an expression



/*


* Every variable name is an expression.

Let `expr1` and `expr2` be expressions.

* Then `expr1()` is also an expression.
* Then `expr1(expr2)` is also an expression.
* Then `expr1 + expr2` is an expression
* Then `expr1[expr2]` is an expression
* Then `(expr1)` is also an expression.


*/

const t = test()();
t()


//

let x = {
    getUser: function () {
        return {
            getFirstName: function () {
                return 'Jane';
            }
        };
    }
};

x.getUser().getFirstName()



// -----------t

function f() {

}
// is the same
let f = function () {
    
}

// -----------------------------------



function identity(arg) {
    return arg;
}

// To evaluate this function invocation expression:
1



// We first have to eval this function invocation expression:
identity(identity) -> function identity(arg) { return arg; } (basic2.js#4);


    return function identity(arg) { return arg; } (basic2.js#4);


// For that, we have to evaluate the target:
identity -> function identity(arg) { return arg; } (basic2.js#4)

// and the argument
identity -> function identity(arg) { return arg; } (basic2.js#4)


function identity(arg) {
    return arg;
}


//


function apply(f, x) {
    return f(x);
}


apply(function (x) { return x * 2 }, 10)


// ========================

function filter(arr, filterFunc) {
    let result = [];

    for (let item of arr) {
        if (filterFunc(item)) {
            result.push(item);
        }
    }
    return result;
}


filter([1, 2, 3, 4, 5], x => x > 3)


//function(x) { return x > 3; }
// is the same as:
x => x > 3


// ----------------


document.writeln(
    [1, 2, 3, 4].every(x => x > 1)
);

