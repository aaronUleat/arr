var iterators_return_arrays = ( function () {

	function curve (grade) {
		return grade += 5;
	}
	function first(word) {
		return word[0];
	}
	function mapMethod () {
		console.log(`***METHOD MAP******METHOD MAP******METHOD MAP******METHOD MAP***`);
		console.log(`El metod map() funciona como un forEach la diferencia es que devuelve un 
			arreglo con los resultados`);
		var grades = [77, 65, 81, 92, 83];
		var newgrades = grades.map(curve);
		console.log(`Este es arreglo original: `, grades, `El resultado al pasarle el metodo map() 
			que va sumar `, newgrades);
		var words = ["for","your","information"];
		var firstWords = words.map( first );
		console.log(`Ejemplo de de map() pero con strings `, words, `El siguiente va a tomar el arreglo y va 
			a sacar a primero letra`, firstWords);
		console.log( firstWords.join("") );
		console.log(`*************************************************************************`);
	}
	function isEven(num) {
		return num % 2 == 0;
	}
	function isOdd(num) {
		return num % 2 != 0;
	}
	function filterMethod () {
		console.log(`***FILTER METHOD******FILTER METHOD******FILTER METHOD******FILTER METHOD***`);	
		var nums = [];
		for (var i = 0; i < 20; ++i) {
			nums[i] = i+1;
		}
		var evens = nums.filter(isEven);
		var odds = nums.filter(isOdd);
		console.log(`Este es el arreglo original: `, nums);
		console.log(`A este metodo filter() le pasamos la funcion isEven: `, evens);
		console.log(`A este metodo filter() le pasamos la funcion isOdd: `, odds);

		console.log(`*************************************************************************`);
	}
	return {
		mapMethod: mapMethod,
		filterMethod: filterMethod
	}
})();
iterators_return_arrays.mapMethod();
iterators_return_arrays.filterMethod();