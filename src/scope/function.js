//este es un ejemplo de como funcionan las variables dentro de una funcion por que solo existen dentro de la funcion nada mas o scope local

const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();

// este es un repaso nada que yo defina como let o const se puede re asignar despues entonces solo se puede cambiar una vez
const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    // esto es un errorlet y = 2;
    console.log(x);
    console.log(y);
}

anotherFunction();

