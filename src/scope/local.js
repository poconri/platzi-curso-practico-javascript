//scope local el cual me permite acceder a una variable en un bloque de codigo o en una funcion y solamente en esa estructura.

const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
//el console log de abajo falla por que la variable no existe fuera de la funcion
console.log(hello);


//este es un buen ejemplo, que paso de ser una variable global a ser un variable local. Esto de abajo se llama ambito lexico es que mi funcion tiene acceso a la variable de abajo y entonces dejo de trabajar en la variable global si no que trabajo en la variable local y ambas existen al mismo tiempo entonces a esta dualidad se le conoce como ambito lexico.
var scope = "I am global";

const functionScope = () => {
    var scope = " i am just a local";
    const func = () => {
    return scope
}
console.log(func());
};

functionScope();
console.log(scope);

//este fue el ejemplo que utilizo en el examen esta bien bonito por que solo una de las funciones esta activa dentro del scope de la funcion las otra solo estan funcionando dentro de los corchetes

const fruits = () => { 
	if (true) { 
        debugger
		var fruit1 = 'apple'; 
		const fruit2 = 'banana'; 
		let fruit3 = 'kiwi'; 
        
		} return console.log(fruit1);
} 

fruits(true);