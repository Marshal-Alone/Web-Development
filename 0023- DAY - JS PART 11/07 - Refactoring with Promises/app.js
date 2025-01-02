//          Promise
//  --> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//      Promises -> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//Code with callback hell occuring
function save_to_db_callback(data, success, failure) {
	let internet_speed = Math.floor(Math.random() * 10) + 1;
	if (internet_speed > 4) {
		success(data);
	} else {
		failure();
	}
}

{
	//Convert function to promise
	function save_to_db(data) {
		return new Promise((resolve, reject) => {
			let internet_speed = Math.floor(Math.random() * 10) + 1;
			console.log(`Internet speed: ${internet_speed}`);
			if (internet_speed > 4) {
				resolve("SUCESS  : Data was saved");
			} else {
				reject("FAILURE : Weak Connection");
			}
		});
	}
}

//callback hell
//save_to_db_callback(
"DATA 1",
	() => {
		console.log("SUCCESS 1 : Your data was saved");
		save_to_db_callback(
			"DATA 2",
			() => {
				console.log("SUCESS 2 : Data saved");
				save_to_db_callback(
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
				console.log("FAILURE 2 : Data not saved");
			}
		);
	},
	() => {
		console.log("FAILURE 1 : Data was not saved");
	};
// );

//Refactor using promise
{
	// simple()
	function simple() {
		save_to_db("DATA 1")
			.then((e) => {
				console.log("Promise was resolved");
				console.log(e.trigger);
			})
			.catch(() => {
				console.log("Promise was rejected");
			});
	}
}

//Promise chaining
{
	function p1() {
		save_to_db("DATA 1")
			.then(() => {
				console.log("PROMISE 1 Resolved");
				save_to_db("DATA 2")
					.then(() => {
						console.log("PROMISE 2 Resolved");
						save_to_db("DATA 3")
							.then(() => {
								console.log("PROMISE 3 Resolved");
							})
							.catch(() => {
								console.log("Promise 3 Rejected");
							});
					})
					.catch(() => {
						console.log("Promise 2 Rejected");
					});
			})
			.catch(() => {
				console.log("Promise 3 Rejected");
			});
	}
}

//Convert functison to promise
function save_to_db(data) {
	return new Promise((resolve, reject) => {
		let internet_speed = Math.floor(Math.random() * 10) + 1;
		console.log(`Internet speed: ${internet_speed}`);
		if (internet_speed > 4) {
			resolve(`SUCESS  : ${data} was saved`);
		} else {
			reject("FAILURE : Weak Connection");
		}
	});
}

//Better way to write this --> Promise Chaining

//Result and error
//result -> contains successful msg declared in resolve
//error -> contains error msg declared in resolve

save_to_db("DATA 1")
	.then((result) => {
		console.log("SUCCESS MSG ->", result);
		console.log("DATA 1 Saved");
		return save_to_db("DATA 2");
	})
	.then((result) => {
		console.log("SUCCESS MSG ->", result);
		console.log("DATA 2 Saved");
		return save_to_db("DATA 3");
	})
	.then((result) => {
		console.log("SUCCESS MSG ->", result);
		console.log("DATA 3 Saved");
	})
	.catch((error) => {
		console.log("ERROR MSG ->", error);
		console.log("Promise was rejected");
	});
