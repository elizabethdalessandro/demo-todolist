

function func() {
    document.writeln('myFunction has been called<br/>');

    return function() {
        document.writeln('test');
        return 1;
    };
}

let myValue = func();
//document.writeln(myValue);

myValue();
myValue();


let myVar = { foo: 1 };

myVar.foo

/*
document.writeln('myFunction has been called<br/>');

let myValue = function() {
    document.writeln('test');
};
myValue();
myValue();

*/


