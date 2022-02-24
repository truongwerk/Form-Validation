const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
let check = [0, 0, 0, 0];
form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInput();
});

function checkInput() {
	checkUsername();
	checkEmail();
	checkPassword();
	checkPassword2();
	const sumCheck = check.reduce(
		(previousValue, currentValue) => previousValue + currentValue,
		0
	);
	console.log(sumCheck);
	if (sumCheck == 4) {
		alert("Success");
	}
}
username.addEventListener("change", (e) => {
	checkUsername();
});
email.addEventListener("change", (e) => {
	checkEmail();
});
password.addEventListener("change", (e) => {
	checkPassword();
});
password2.addEventListener("change", (e) => {
	checkPassword2();
});
function checkUsername() {
	if (username.value == "") {
		setError(username, "Username cannot be blank");
		check[0] = 0;
		return;
	} else if (/^[A-Za-z\d]{8,24}$/.test(username.value)) {
		setSuccess(username);
		check[0] = 1;
		return;
	} else {
		setError(username, "Only letter and number, range 8-24");
		check[0] = 0;
		return;
	}
}

function checkEmail() {
	if (email.value == "") {
		setError(email, "Email cannot be blank");
		check[1] = 0;
		return;
	} else if (
		/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
	) {
		setSuccess(email);
		check[1] = 1;
		return;
	} else {
		setError(email, "Email is invalid");
		check[1] = 0;
		return;
	}
}

function checkPassword() {
	if (password.value == "") {
		setError(password, "Password cannot be blank");
		check[2] = 0;
		return;
	} else if (/^(?=.*[A-Za-z])(?=.*\d).{8,24}$/.test(password.value)) {
		setSuccess(password);
		check[2] = 1;
		return;
	} else {
		setError(password, "Must include 1 letter and 1 number, range 8-24");
		check[2] = 0;
		return;
	}
}

function checkPassword2() {
	if (password.value == "") {
		setError(password2, "Password Confirmation cannot be blank");
		check[3] = 0;
		return;
	} else if (password.value == password2.value) {
		setSuccess(password2);
		check[3] = 1;
		return;
	} else {
		setError(password2, "Must exact similar to Password");
		check[3] = 0;
		return;
	}
}

function setError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	small.innerText = message;
	formControl.className = "form-control error";
}
function setSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}
