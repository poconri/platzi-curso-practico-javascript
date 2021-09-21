//javascrip por naturaleza no fomenta los datos privados pero por medio de los closures puedo crear valores que solo son accesibles por medio de metodos.

const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());

newPerson.setName('oscar');
console.log(newPerson.getName());

//lo que entiendo que estoy haciendo es que uso un metodo para poder extraer o cambiar el valor de la variable, entonces se vuelve privado y que no tengo accesso a esta info para manejar datos privados. Si no es por el metodo correcto, por que se vuelve una propiedad de person.