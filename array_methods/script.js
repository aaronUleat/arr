// REMOVING ELEMENTS OF AN ARRAY
let removing_from_array = (function () {

	// con pop() remueve la ultima posicion del array
	function removingWithPop() {
		var nums = [1,2,3,4,5,9];
		nums.pop();
		console.log("Ya no hay numero 9 en el arreglo: ", nums);
	}

	function removingManually() {

		var nums = [9,1,2,3,4,5];
		console.log("Remover la primera posicion con el numero 9: ", nums);
		for( var i = 0 ; i < nums.length - 1; i++) {
			nums[i] = nums[i+1];
		}
		console.log("Removiendo el numero 9: ",nums,"This doesn't work because")
	}

	function removingWithShift() {
		var nums = [9,1,2,3,4,5];
		nums.shift();
		console.log("Removiendo con shift el 9: ", nums);
	}

	function removeFromMidleOfArray() {
		
	}


	return {
		removingWithPop: removingWithPop,
		removingManually: removingManually,
		removingWithShift: removingWithShift
	}
})();
removing_from_array.removingWithPop();
removing_from_array.removingManually();
removing_from_array.removingWithShift();

var sort_array = (function () {
	function reverseArray () {
		var nums = [1,2,3,4,5];
		console.log("Metodo reverse(): ", nums.reverse());
	}

	function sortString() {
		var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
		console.log("Nombres sin sort()", names);
		console.log("Nombres con sort(): ", names.sort());
	}

	function sortNumbers() {
		var nums = [3,0,1,2,100,4,200,-5];
		console.log("Numeros sin sort()", nums);
		console.log("Numberos con sort()", nums.sort(), "El sort no es el correcto");
		console.log("A la funcion sort() se le puede pasar una funcion para ordenar los numeros", nums.sort(compare), "En este caso se esta pasando una funcion compare");
	}
	function compare (num1, num2) {
		return num1  - num2;
	}

	return {
		reverseArray: reverseArray,
		sortString: sortString,
		sortNumbers: sortNumbers
	}
})();
sort_array.reverseArray();
sort_array.sortString();
sort_array.sortNumbers();