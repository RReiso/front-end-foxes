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
  
  title.innerHTML = route.templateId.charAt(0).toUpperCase() + route.templateId.slice(1);
  console.log(title.innerHTML + " is shown.");
}

function navigate(path) {
  console.log(window.location.origin);
	window.history.pushState({}, path, window.location.origin + path);
	updateRoute();
}

function onLinkClick(event) {
  event.preventDefault();
	navigate(event.target.href);
}

window.onpopstate = () => updateRoute();
updateRoute();
