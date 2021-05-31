const routes = {
	"/login": {
		templateId: "login",
	},
	"/dashboard": {
		templateId: "dashboard",
	},
};

function updateRoute() {
	const path = window.location.pathname;
	const route = routes[path];

	if (!route) {
		return navigate("/login");
	}

	const template = document.getElementById(route.templateId);
	const view = template.content.cloneNode(true);
	const app = document.getElementById("app");
	const title = document.querySelector("title");

	app.innerHTML = "";
	app.appendChild(view);

	title.innerHTML =
		route.templateId.charAt(0).toUpperCase() + route.templateId.slice(1);
	console.log(title.innerHTML + " is shown.");
}

function navigate(path) {
	console.log(window.location.origin);
	window.history.pushState({}, path, window.location.origin + path);
	updateRoute();
}

// function onLinkClick(event) {
//   event.preventDefault();
// 	navigate(event.target.href);
// }

window.onpopstate = () => updateRoute();
updateRoute();

async function register() {
	const registerForm = document.getElementById("registerForm");
	const formData = new FormData(registerForm);
  console.log("new FormData(registerForm): ",formData);
	const data = Object.fromEntries(formData);
  console.log("Object.fromEntries(formData): ", data);
	const jsonData = JSON.stringify(data);
  console.log("JSON.stringify(data): ", jsonData);

	const result = await createAccount(jsonData);

	if (result.error) {
		return console.log("An error occured:", result.error);
	}

	console.log("Account created!", result);
}

async function createAccount(account) {
	try {
		const response = await fetch("//localhost:5000/api/accounts", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: account,
		});
    console.log(response);
		return await response.json();
	} catch (error) {
		return { error: error.message || "Unknown error" };
	}
}
