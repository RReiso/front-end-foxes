body = document.querySelector("body");
textDiv = document.querySelector(".text");
document.addEventListener("keydown", displayChar);

//color counter:
let number = 0;

function displayChar(e) {
  if (e.key !== "Shift"){
	const char = document.createElement("span");
	char.innerText = e.key;
	char.style.backgroundColor = randomColor();
	textDiv.appendChild(char);
	number++;

  //when user types "." display the result and remove eventListener
	if (char.innerText === ".") {
		const result = document.createElement("p");
		result.innerText = `Your rainbow sentence has ${number} colors!`;
		body.appendChild(result);
		document.removeEventListener("keydown", displayChar);
	}
  }

}

//generate hex color:
function randomColor() {
	let hexColor = Math.random().toString(16);
	hexColor = "#" + hexColor.slice(2, 8);
	return hexColor;
}
