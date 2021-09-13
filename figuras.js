console.group("cuadrados");

//const ladoCuadrado = 5;
function perimetroCuadrado(lado) {
    return lado * 4;
}
let textoCuadrado = "Los lados del cuadrado miden:";
let textoAreaCuadrado = "El area de un cuadrado mide:";
let medidacm = 'cm';
let medidacm2 = 'cm^2';
function areaCuadrado(lado) {
    return lado * lado;
}
//const area = ladoCuadrado => ladoCuadrado * ladoCuadrado; creo que estaba bien pero aun no se aplicarla bien del todo
let textoCuadradoCompleto = `${textoCuadrado} ${perimetroCuadrado()} ${medidacm}`;
let textoAreaCuadradoCompleto = `${textoAreaCuadrado} ${areaCuadrado()} ${medidacm2}`;
console.log(textoCuadradoCompleto);
console.log(textoAreaCuadradoCompleto);
console.groupEnd();

//aca me doy cuenta que neceso ponerle mucha atencion a las minusculas y mayusculas

//aca me refiero com lt1 a ladoTriangulo y bt como baseTriangulo para aclarar lo que hice y at es la altura del triangulo

//const lt1 = 6;
//const lt2 = 6;
//const bt = 4;
//const at = 5.5;
console.group("Triangulos");
let textoTriangulo = "el perimetro de un triangulo mide:";
let textoAreaTriangulo = "El area de un Triangulo mide:";
//
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function AreaTriangulo(base, altura){
    return (base * altura) / 2 ;
}

let textoTrianguloCompleto = `${textoTriangulo} ${perimetroTriangulo()} ${medidacm}`;
let textoAreaTrianguloCompleto = `${textoAreaTriangulo} ${AreaTriangulo()} ${medidacm2}`;
console.log(textoTrianguloCompleto);
console.log(textoAreaTrianguloCompleto);
console.groupEnd();

//ahora una circunferencia
console.group("Circulos");

let textoCirculo = "el perimetro de un Circulo mide:";
let textoAreaCirculo = "El area de un Circulo mide:";
function diametroCirculo(radio) {
    return radio * 2;
}
const PI = Math.PI;
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
let textoCirculoCompleto = `${textoCirculo} ${perimetroCirculo()} ${medidacm}`;
let textoAreaCirculoCompleto = `${textoAreaCirculo} ${areaCirculo()} ${medidacm2}`;
console.log(textoCirculoCompleto);
console.log(textoAreaCirculoCompleto);
console.groupEnd();
//#Abres
//console.group("nombre que desees");
//#Cierras
//console.groupEnd();


//aca junto html con JavaScript
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }

  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }

  function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
  
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
  }

  function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
  
    const area = areaCirculo(value);
    alert(area);
  }

  //Triangulo

  function calcularPerimetroTriangulo() {
    const input = parseInt(document.getElementById("InputTriangulo").value);

    const input1 = parseInt(document.getElementById("InputTriangulo1").value);
   
    const input2 = parseInt(document.getElementById("InputTriangulo2").value);
  
    const perimetro = perimetroTriangulo(input,input1,input2);
    alert(perimetro);
  }

  function calcularAreaTriangulo() {
    const input = parseInt(document.getElementById("InputTriangulo").value);

    const input1 = parseInt(document.getElementById("InputTriangulo3").value);

    const area = AreaTriangulo(input,input1);
    alert(area);
  }

function alturaTrianguloIsosceles(lado, lado1, base){
    if(lado == lado1 && lado != base){
        alert('Los lados son iguales y diferentes de la base, es un triangulo Isosceles.');
        return altura = Math.sqrt((lado * lado)-(base * base))
        
    } else {
        'No es un triangulo Isosceles.'
    }
}
console.log(alturaTrianguloIsosceles(4,4,2));

