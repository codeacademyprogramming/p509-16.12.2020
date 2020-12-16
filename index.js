function makeUser(salam, sagol) {
	return { salam: "John", sagol: 30 };
}

let user = makeUser("John", 30);

// let userSecond = makeUser("Test", 1999);

console.log(user, "user");
// console.log(userSecond, "userSecond");

const user = {
	name: "Ramil",
	age: 23,
	test: [1, 2, 3, 4],
	birthday: null,
	sizes: {
		height: 121,
		width: "12312",
		hand_sizes: {
			height: 121,
			width: "12312",
			finger_sizes: {
				height: 121,
				width: "12312",
			},
		},
	},
}; // 1mb

const user2 = user;
