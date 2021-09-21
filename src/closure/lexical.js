//en este curso voy a enteder como se mecla el ambito lexico dentro de un closure y tener nuevos alcanzes dentro del closure.

const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

//esto esta de ahuevo por que depende del scope entonces como aca abajo tengo otro closure, o alcanze o ambito y otra manera de manejar la variable entonces las dos se vuelven reales por separado

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
myOtherCount();