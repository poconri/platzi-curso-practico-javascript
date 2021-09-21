//que es un closure, es la combinacion de una funcion y un ambito lexico. el ejemplo de abajo se muestra bien que algo falta por que en teoria deberia subir el contenido de coins con saveCoins pero por alguna razon no lo hizo caba dez que la funcion agrego "mas dinero" el resultado final del monedero no cambio

const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

//lo que entiendo abajo es que genero una funcion dentro de una funcion abajo para poder ir sumando y guardando los valores dentro de su closure.

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

const helloWorld = () => { 
    globalVar = "I'm global"; 
} 
helloWorld();

const fruits = () => { 
	if (true) { 
		var fruit1 = 'apple'; 
		const fruit2 = 'banana'; 
		let fruit3 = 'kiwi';
		} 
} 

