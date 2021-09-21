var a = 'Hello';

function hello(){
    let b = 'Hello World';
    const c = 'Hello World!';
    if (true) {
        let d = 'Hello World!!'
        debugger
    }
}

hello();

//debuger es la palabra magica y me va dar accesso a ver todos estos cambios.

const moneyBox = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

//debo recordar asignar el debugger en el lugar correcto