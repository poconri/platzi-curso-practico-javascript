//hoisting o levantamiento de las declaraciones aca un ejemplo mas abajo

// el hoisting hace lo siguiente cuando se complila y eleva las declaraciones entonces deja de ser asi.

a = 2 ;
var a;

console.log(a);


// y se vuelve asi por que cuando se compila se arregla
var a;
a = 2 ;

console.log(a);

// pero aca abajo es un buen ejemplo de como el hoisting se ejecuta cuando se trata de declaraciones y no de inicializaciones, por que me regresa undefined, entonces la variable se declara pero sin ningun valor.
console.log(a);
var a = 2;

//esta seria la forma correcta
function nameOfDog(name) {
    console.log(name);
}

nameOfDog('Atenea');

// pero que pasa si hago esto con el mismo ejemplo y llamo la funcion antes de agregarla, pero el motor que compila javaScript, se ajustan o se adaptan y el hositing cambia y antes de ser interpretado, se compila y levanta la funcion y la pone en la memoria y despues corre o ejecuta la funcion y no hay problema.

{nameOfDog('Atenea');}
function nameOfDog(name) {
    console.log(name);
}
