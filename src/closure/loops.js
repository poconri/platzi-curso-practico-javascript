const anotherFunction = () => {
    for (var i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        },1000)
    }
}
anotherFunction();

//lo que el explicaba en este ejemplo es que tengo que tener mucho cuidado con esta clase de situationes, por que con lleva que yo no estoy teniendo el control del resultado. tengo este ejemplo de otro estudiante se mira interesante lo mas importante va ser que voy a poder probar todas estas cosas ya que pueda hacer debugging.

const closure = () => {
	for(var i = 0; i < 5;  i++){
		setTimeout(() => {
			console.log(`asincrono ${i}` )
		})
		console.log(`sincrono ${i}`)
	}
}
closure()

//este ejemplo lo saque de la cocina del codigo esta muy chilero la verdad

const cortar = (ingrediente) => {
    console.log('Cortar ' + ingrediente);
  }
  
  function mezclarIngredientes(n) {
    if (n <= 0) return;
  
    console.log('Mezclar #' + n);
    mezclarIngredientes(n - 1);
  }
  
  function comer() {
    console.log('Comer');
  }
  
  function hacerEnsaladaMixta() {
    cortar('tomate');
    cortar('lechuga');
    cortar('cebolla');
    mezclarIngredientes(5);
    comer();
  }
  
  hacerEnsaladaMixta();