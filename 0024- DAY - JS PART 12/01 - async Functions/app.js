//                  ASYNC

async function greet() {
	// throw "Some random error"
	return "Hello"; //returns promise
}
greet(); // --> Promise {<fulfilled>: 'Hello'}

let hi = async () => {}; //returns promise
hi(); // --> Promise {<fulfilled>: undefined}

async function hello() {} //returns promise
hello(); // --> Promise {<fulfilled>: undefined}
//
//
//
//
//
//                AWAIT

function getNUm() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let num = Math.floor(Math.random() * 10) + 1;
			console.log(num);
			resolve();
		}, 1000);
	});
}
async function demo() {
	await getNUm();
	await getNUm();
	await getNUm();
	await getNUm();
}

{
	//use await in color change
	h1 = document.querySelector("h1");

	function change_color(color) {
		return new Promise((resolve) => {
			setTimeout(() => {
				h1.style.color = color;
				resolve(`Color changed to ${color}`);
			}, 1000);
		});
	}

	async function execute1() {
		await change_color("blue");
		await change_color("green");
		await change_color("red");
		await change_color("orange");
		//
		//      OR
		//
		// await change_color("blue").then((result) => {});
		// await change_color("green").then((result) => {
		// console.log(result);
		// });
		// await change_color("red").then((result) => {
		// console.log(result);
		// });
		// await change_color("orange").then((result) => {
		// console.log(result);
		// });
	}
	execute1();

	function old() {
		//olde code
		//Redone using Promises
		function change_color(color) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					h1.style.color = color;
					resolve(`Color changed to ${color}`);
				}, 1000);
			});
		}

		change_color("Blue")
			.then((result) => {
				console.log(result);
				return change_color("red");
			})
			.then((result) => {
				console.log(result);
				return change_color("green");
			})
			.then((result) => {
				console.log(result);
				return change_color("orange");
			})
			.then((result) => {
				console.log(result);
				return change_color("skyblue");
			})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

{
	// use await in callback hell
	function save_to_db(data) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let internet_speed = Math.floor(Math.random() * 10) + 1;
				if (internet_speed > 4) {
					console.log(data, " was saved successfully");
					resolve();
				} else {
					reject("FAILURE : Weak Connection");
				}
			}, 1000);
		});
	}

	async function execute() {
		try {
			await save_to_db("DATA 1");
			await save_to_db("DATA 2");
			await save_to_db("DATA 3");
		} catch (error) {
			console.log(error);
		}
	}

	execute();

	function old_code() {
		//Code with callback hell occuring
		function save_to_db(data, success, failure) {
			//success & failure are 2 callbacks
			let internet_speed = Math.floor(Math.random() * 10) + 1;
			//   console.log(`Internet speed = ${internet_speed}`); //extra

			if (internet_speed > 4) {
				success(data);
			} else {
				failure();
			}
		}

		//pass 2 callback function to perform in case of failure or sucess
		save_to_db(
			"DATA 1",
			() => {
				console.log("SUCCESS 1 : Your data was saved"); //sucess callback for data 1
				save_to_db(
					//when 1st data is success then only save next data
					"DATA 2",
					() => {
						console.log("SUCESS 2 : Data saved"); //sucess callback for data 2

						save_to_db(
							"DATA 3",
							() => {
								console.log("SUCCESS 3 : Data was saved");
							},
							() => {
								console.log("FAILURE 3 : Data was not saved");
							}
						);
					},
					() => {
						console.log("FAILURE 2 : Data not saved"); //failure callback for 2nd data
					}
				);
			},
			() => {
				console.log("FAILURE 1 : Data was not saved"); //failure callback for 1st data
			}
		);
	}
}
