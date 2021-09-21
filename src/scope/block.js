//lo que voy a entender como funcionan los blocks dentro de una funcion hay que tener en cuenta que let y const tambien respetan los bloques de codigo, los bloques los defino con {} entonces esas funciones no van a servir fuera de donde estan.



const fruits = () => {
    if(true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
    
}

fruits();

// aca todo normal al principio me da 2 por que se corre el codigo del bloque primero pero es muy diferente en el ejemplo de abajo
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

// el scope por bloques es mas peligroso por que estoy remplazando los valores del scope sin darme cuenta y no es igual a como cuando estoy trabajando funciones por que hay variables que solo viven dentro de las funciones
var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

//tengo que tener cuidado y este es un buen ejemplo del scope, por que siempre asigna 10 por que esta accediendo al ultimo valor al que tuvo acceso, podria asignar mas codigo o asignarlo fuera de la funcion y lo puedo cambiar cambiando el tipo de sentencia de la funcion.


const anotherFunction = () => {
    for (var i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        },1000)
    }
}
anotherFunction();

//ya que aca abajo solo por usar let me deja hacer el contador por que va agregando los numeros uno por uno.

const anotherFunction = () => {
    for (let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        },1000)
    }
}
anotherFunction();