enum Role {
	ADMIN,
	USER,
	MODERATOR,
}

let person = {
	name: "Vlad",
	age: 19,
	role: Role.ADMIN,
};

console.log(person.role);
