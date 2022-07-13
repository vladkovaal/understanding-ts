type Combined = number | string;

function combine(el1: Combined, el2: Combined) {
	if (typeof el1 === "number" && typeof el2 === "number") {
		return +el1 + +el2;
	} else {
		return el1.toString() + el2.toString();
	}
}

function setStrBoolean(bool: "true" | "false") {
	return `It's ${bool}!`;
}

const greeting = "Hi, ";
const firstName = "Vlad";
const years = 19;

console.log(combine(greeting, firstName));

console.log(combine(firstName, years));

console.log(combine(10, 15));

console.log(setStrBoolean("true"));

console.log(setStrBoolean("false"));
