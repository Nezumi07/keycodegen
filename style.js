// press ANY key to initiate

document.addEventListener("keydown", (event) => {
	let start = document.getElementById("page1");
	let main = document.getElementById("page2");

	let key = document.getElementById("event.key");
	let which = document.getElementById("event.which");
	let code = document.getElementById("event.code");
	let displayWhich = document.getElementById("display.which");

	start.style.display = "none";
	main.style.display = "block";

	key.textContent = event.key;
	which.textContent = event.which;
	code.textContent = event.code;

	displayWhich.textContent = event.which;

});

// click mouse/trackpad to initiate

document.addEventListener("click", (event) => {
	let start = document.getElementById("page1");
	let main = document.getElementById("page2");

	let key = document.getElementById("event.key");
	let which = document.getElementById("event.which");
	let code = document.getElementById("event.code");
	let displayWhich = document.getElementById("display.which");

	start.style.display = "none";
	main.style.display = "block";

	key.textContent = event.key;
	which.textContent = event.which;
	code.textContent = event.code;

	displayWhich.textContent = event.which;

});

