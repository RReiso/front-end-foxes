const situationText = document.getElementById("situation-text");
const options = document.querySelector(".options");

let inventory = {};

function start() {
	//empty the inventory when game starts
	inventory = {};
	displaySituation(1);
}

function displaySituation(situationIndex) {
	//remove all the options
	while (options.firstChild) {
		options.removeChild(options.firstChild);
	}

	//display situation text according to the chosen option (1 if starting the game)
	const situation = allSituations.find((s) => s.index === situationIndex);
	situationText.innerText = situation.text;

	//display options according to the situation
	situation.options.forEach((option) => {
		if (displayOption(option)) {
			//create option buttons
			const button = document.createElement("button");
			button.classList.add("option");
			button.innerText = option.text;
			button.addEventListener("click", () => selectOption(option));
			options.appendChild(button);
		}
	});
}

function displayOption(option) {
	//returns true if inventory is empty or the required item is there. Otherwise returns false
	return (
		option.requiredInventory == null || option.requiredInventory(inventory)
	);
}

function selectOption(option) {
	if (option.nextIndex < 1) {
		start();
	} else {
		//update inventory
		inventory = Object.assign(inventory, option.updateInventory);
		//show next situation
		displaySituation(option.nextIndex);
	}
}

const allSituations = [
	{
		index: 1,
		text: "You are in an enchanted land and see red boots on the ground next to you. What are you going to do?",
		options: [
			{
				text: "Take the boots",
				updateInventory: { boots: true },
				nextIndex: 2,
			},
			{
				text: "Ignore the boots",
				nextIndex: 2,
			},
		],
	},
	{
		index: 2,
		text: "You enter the woods and meet an old lady.",
		options: [
			{
				text: "You give her the red boots in exchange for her grey cape",
				requiredInventory: (inventory) => inventory.boots,
				updateInventory: { boots: false, cape: true },
				nextIndex: 3,
			},
			{
				text: "You give her the red boots in exchange for her walking stick",
				requiredInventory: (inventory) => inventory.boots,
				updateInventory: { boots: false, stick: true },
				nextIndex: 3,
			},
			{
				text: "You greet the lady and continue walking",
				nextIndex: 3,
			},
			{
				text: "You pass by the old lady without saying a word",
				nextIndex: 3,
			},
		],
	},
	{
		index: 3,
		text: "It is late and dark, you have been walking for hours. Suddenly you see a hut on a chicken leg. What will you do?",
		options: [
			{
				text: "Enter the hut",
				nextIndex: 4,
			},
			{
				text: "Ignore the hut and find a bear's cave to sleep in",
				nextIndex: 5,
			},
			{
				text: "You are too tired to keep walking but decide to stay up all night to be safe",
				nextIndex: 6,
			},
		],
	},
	{
		index: 4,
		text: "Oh no!!! Baba Yaga killed you!",
		options: [
			{
				text: "Start again",
				nextIndex: 0,
			},
		],
	},
	{
		index: 5,
		text: "Oh no!!! The bear ate you!",
		options: [
			{
				text: "Start again",
				nextIndex: 0,
			},
		],
	},
	{
		index: 6,
		text: "The next morning when it is bright and sunny you decide to enter the hut. The old and ugly Baba Yaga is ready to attack you!",
		options: [
			{
				text: "You run for your life",
				nextIndex: 7,
			},
			{
				text: "Start beating Baba Yaga with your stick",
				requiredInventory: (inventory) => inventory.stick,
				nextIndex: 8,
			},
			{
				text: "Throw the grey cape on Baba Yaga",
				requiredInventory: (inventory) => inventory.cape,
				nextIndex: 9,
			},
			{
				text: "Throw the red boots at her",
				requiredInventory: (inventory) => inventory.boots,
				nextIndex: 10,
			},
		],
	},
	{
		index: 7,
		text: "You trip over, Baba Yaga catches you and makes a soup out of you!",
		options: [
			{
				text: "Start again",
				nextIndex: 0,
			},
		],
	},
	{
		index: 8,
		text: "Baba Yaga breaks your stick and makes a stew out of you!",
		options: [
			{
				text: "Start again",
				nextIndex: 0,
			},
		],
	},
	{
		index: 9,
		text: "Temporarily blinded Baba Yaga trips over and falls into a boiling pot of soup and dies. You start living in the hut and become the next Baba Yaga!",
		options: [
			{
				text: "You won! Play again",
				nextIndex: 0,
			},
		],
	},
	{
		index: 10,
		text: "While Baba Yaga is dizzy, you push her into the fire and she dies. You start living in the hut and become the next Baba Yaga! ",
		options: [
			{
				text: "You won! Play again",
				nextIndex: 0,
			},
		],
	},
];

start();
