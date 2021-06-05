const routes = {
	"/login": {
		templateId: "login",
		title: "Login",
	},
	"/dashboard": {
		templateId: "dashboard",
		title: "Dashboard",
		init: refresh,
	},
};

const storageKey = "savedAccount";


//state that represents user account's current data:
let state = Object.freeze({
	account: null,
});


//Update user's account data:
function updateState(property, newData) {
	state = Object.freeze({
		...state,
		[property]: newData,
	});

  //Update loclStorage with user's account data
	localStorage.setItem(storageKey, JSON.stringify(state.account));
}

//Add text or node to the element:
function updateElement(id, textOrNode) {
	const element = document.getElementById(id);
	element.textContent = "";
	element.append(textOrNode);
}

function updateRoute() {
  //Find current route:
	const path = window.location.pathname;
	console.log(path);
	const route = routes[path];
	console.log(route);

  //If route doesn't exist, return to "/login":
	if (!route) {
		return navigate("/login");
	}

  //Find the template according to the current route:
	const template = document.getElementById(route.templateId);
	const view = template.content.cloneNode(true);
	const app = document.getElementById("app");
	const title = document.querySelector("title");

  //Display the appropriate template:
	app.innerHTML = "";
	app.appendChild(view);

	title.innerHTML =
		route.title;
	console.log(title.innerHTML + " is shown.");

  //if the route is "/dashboard", execute refresh() function:
	if (typeof route.init === "function") {
		route.init();
	}
}


function navigate(path) {
  //Add path to the browser history:
	window.history.pushState({}, path, window.location.origin + path);
	updateRoute();
}

async function refresh() {
  //Get user's account data and update stae:
	await updateAccountData();

	//Display user's account data according to the current state:
	updateDashboard();
}

async function login() {
	const loginForm = document.getElementById("loginForm");
	const user = loginForm.user.value;
  //Chech if user exists and read data:
	const data = await getAccount(user);

	if (data.error) {
		return updateElement("loginError", data.error);
	}

	//Update user's account information:
	updateState("account", data);
	//Redirect:
	navigate("/dashboard");
	//Display user's account data according to the current state:
	updateDashboard();
}

//Sending a GET request to check if user exists and read the data if they do:
async function getAccount(user) {
	try {
		const response = await fetch(
			"//localhost:5000/api/accounts/" + encodeURIComponent(user)
		);
		return await response.json();
	} catch (error) {
		return { error: error.message || "Unknown error" };
	}
}

async function updateAccountData() {
	const account = state.account;
	if (!account) {
		return logout();
	}

	const data = await getAccount(account.user);
	if (data.error) {
		return logout();
	}
	//Update user's account information:
	updateState("account", data);
}


async function register() {
  //Get data from the registration form:
	const registerForm = document.getElementById("registerForm");
	const formData = new FormData(registerForm);
	const data = Object.fromEntries(formData);
	const jsonData = JSON.stringify(data);

  //Use new user's data to create an account:
	const result = await createAccount(jsonData);

	if (result.error) {
		return console.log("An error occured:", result.error);
	}

  //Update user's account information:
	updateState("account", result);
	console.log("Account created!", result);
  //Redirect:
	navigate("/dashboard");
  //Display user's account data according to the current state:
	updateDashboard();
}

//Sending a POST request to create a new user's account
async function createAccount(account) {
	try {
		const response = await fetch("//localhost:5000/api/accounts", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: account,
		});
		return await response.json();
	} catch (error) {
		return { error: error.message || "Unknown error" };
	}
}


//Display account's data based on the current state of the account:
function updateDashboard() {
	const account = state.account;
	console.log("update dashboard: " + account);

	if (!account) {
		return logout();
	}

	updateElement("description", account.description);
	updateElement("balance", account.balance.toFixed(2));
	updateElement("currency", account.currency);

	const transactionsRows = document.createDocumentFragment();
	for (const transaction of account.transactions) {
		const transactionRow = createTransactionRow(transaction);
		transactionsRows.appendChild(transactionRow);
	}
	updateElement("transactions", transactionsRows);
}

//Create a row for a new transaction:
function createTransactionRow(transaction) {
	const template = document.getElementById("transaction");
	const transactionRow = template.content.cloneNode(true);
	const tr = transactionRow.querySelector("tr");
	tr.children[0].textContent = transaction.date;
	tr.children[1].textContent = transaction.object;
	tr.children[2].textContent = transaction.amount.toFixed(2);
	return transactionRow;
}

function logout() {
	//Set user's account data to null (clear the data):
	updateState("account", null);
  //Redirect:
	navigate("/login");
}

function init() {
	const savedAccount = localStorage.getItem(storageKey);

  //If there is data in localStorage, update user's account information in state:
	if (savedAccount) {
		updateState("account", JSON.parse(savedAccount));
	}

	window.onpopstate = () => updateRoute();
	updateRoute();
}

//initialize code:
init();
