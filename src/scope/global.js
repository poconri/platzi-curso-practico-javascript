// el scope de estas variables se refiere a practicamente que estan disponibles y me estan repasando la parte en la que var aun que se puede sobre escribir la variable, no se debe de hacer. Ahora bien con let y const no se puede sobre escribir.

var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello World!';
console.log(hello);



const anotherFunction();

// esto si bien se puede hacer no se debe por que es una mala practica
const helloWorld = () => {
    globalVar = 'im global';
}

helloWorld();
console.log(globalVar);

// en este ejemplo de abajo se nota tambien algo que no se debe de hacer y es algo que no se debe de hacer.
const anotherFunction = () => {
    var localVar = globalVar + 'Im Global';
}

var = "I am global";
console.log(var);