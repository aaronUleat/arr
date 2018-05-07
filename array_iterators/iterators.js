
var array_iterators = (function() {
	function square(num) {
		console.log(num, num * num);
	}
	function forEachMethod() {
		console.log(`**FOREACH****FOREACH****FOREACH****FOREACH****FOREACH****FOREACH****FOREACH**`)
		console.log(`El metodo forEach() toma una funcion como argumento y pasa cada elemento del array dentro de esa esa funcion.`);
		var nums = [1,2,3,4,5,6,7,8,9,10];
		console.log(`Vamos a pasar este arreglo por un forEach() y nos devolvera el la raiz cuadrada de cada numero`);
		nums.forEach( square );
		console.log(`********************************************************************************`);
	}	

	function isEven ( num ) {
		 return num % 2 == 0 ;
	}
	function methodEvery() {
		console.log(`**EVERY****EVERY****EVERY****EVERY****EVERY****EVERY****EVERY****EVERY****EVERY**`);
		console.log(`El metodo every() itera por cada elemento del array y si todos resultan como true 
		entonces devuelve true de lo contratrio devuelve false`);
		var nums = [2,4,6,8,10];
		var otherNums = [2,4,6,8,10, 11, 15];
		var even = nums.every( isEven );
		console.log(`El siguiente array: `, nums, `todos los numeros en este array son pares, cuando lo pasemos 
		por el metodo every() va returnar un true por que todos son pares `, even, `Al metodo every()
		le pasamos una funcion llamada isEven, nums.isEven(every), function isEven(num) { return num % 2}`);
		console.log(`En el siguiente array :`, otherNums, ` contiene numeros impares por lo tanto devuelve`,
			otherNums.every( isEven ));
		console.log(`********************************************************************************`);
	}

	function  methodSome() {
		console.log(`**SOME METHOD*****SOME METHOD*****SOME METHOD*****SOME METHOD*****SOME METHOD***`);
		console.log(`El metodo some() itera un array y devuelve si al menos uno de los elementos que se 
			le pasa a la funcion es true`);
		var nums = [1,2,3,4,5,6,7,8,9,10];
		var impares = [1,5,7,11,15];
		console.log(`El el siguiente array contiene numeros numers pares e impares `, nums, `pero al menos 
			uno es par por lo tanto va a retonar `, nums.some(isEven));
		console.log(`En el siguiente array todos los numeros son impares `, impares, ` cuando le pasamos la 
			function some() va a retonar `, impares.some(isEven));
		console.log(`********************************************************************************`);
	}


	function add (runningTotal, currentValue) {
		console.log(`runningTotal es igual a: `, runningTotal, `currentValue es igual a: `, currentValue);
		return runningTotal + currentValue;
	}

	function concat(accumulateString, item) {
		return accumulateString + item;
	}
	function methodReduce () {
		console.log(`***REDUCE******REDUCE******REDUCE******REDUCE******REDUCE******REDUCE***`);
		console.log(`El metodo reduce() aplica un acumulador a la funcion que se le pase`);
		var nums = [1,2,3,4,5,6,7,8,9,10];
		var sum = nums.reduce( add );
		console.log(`Este el resultado final de usar reduce: `,sum);
		console.log(`EL metodo reduce() para strings`);
		var words = ["the ", "quick ","brown ", "fox "];
		console.log(`Este es un array de string: `, words, `El resultado es el siguiente: `, words.reduce(concat ) );
		console.log(`De nuevo el array: `, words, `Usando reduceRight(): `, words.reduceRight(concat));
	}

	return {
		forEachMethod: forEachMethod,
		methodEvery: methodEvery,
		methodSome: methodSome,
		methodReduce: methodReduce
	}
})();
array_iterators.forEachMethod();
array_iterators.methodEvery();
array_iterators.methodSome();
array_iterators.methodReduce();