//Fun With Functions

const smoothieRecipe = (ingridient1 = "fruit", ingridient2 = "berries") => {
	console.log(
		`Blend together almond milk, ${ingridient1} and ${ingridient2}. Serve and enjoy!`
	);
};

smoothieRecipe("banana", "mango");
smoothieRecipe("spinach");

setTimeout(() => {
	console.log("I will execute last");
}, 0);

//find n-th number of Fibonacci sequence (1,1,2,3,5,8,13,21...)
const fibonacciNumber = (number) => {
	if (number === 1 || number === 2) {
		return 1;
	} else {
		return fibonacciNumber(number - 1) + fibonacciNumber(number - 2);
	}
};

console.log(fibonacciNumber(7));


function add100(number=0){
  if (!isNaN(number)){
    return number+100
  }else{
    return "Invalid Input";
  }
}

console.log(add100());
console.log(add100('k'));
console.log(add100(34.6));