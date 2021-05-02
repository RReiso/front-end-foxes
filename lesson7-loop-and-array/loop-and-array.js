//print every third number from 1 to 20:
function printNumber() {
  resultArray=[];
	for (let i = 1; i < 21; i = i + 3) {
    resultArray.push(i); //push the number to resulting array
		console.log(i);
	}
  console.log(resultArray);
}
printNumber(); //calling function 



//print every third number from an array:
const printEveryThird = (array) => {
	for (let i = 0; i < array.length; i = i + 3) {
		console.log(array[i]);
	}
};

//calling function and passing an array as an argument:
printEveryThird([
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
]);
