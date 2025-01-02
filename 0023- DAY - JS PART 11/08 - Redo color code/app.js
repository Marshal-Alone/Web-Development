h1 = document.querySelector("h1");
//Redo using Promises
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


function old_code() {
	//changr color
	// one();
	function one() {
		setTimeout(() => {
			h1.style.color = "red";
		}, 1000);
		setTimeout(() => {
			h1.style.color = "orange";
		}, 2000);
		setTimeout(() => {
			h1.style.color = "green";
		}, 3000);
	}

	//if we want to do it 10 times we have to write 10 times

	//efficient way to do this is
	function change_color(color, delay, nextColorChange) {
		setTimeout(() => {
			h1.style.color = color;
			console.log(color);
			if (nextColorChange) {
				nextColorChange();
			}
		}, delay);
	}

	//This is callback hell -> nesting of callback
	change_color("blue", 1000, () => {
		change_color("green", 1000, () => {
			change_color("red", 1000, () => {
				change_color("yellow", 1000, () => {
					change_color("orange", 1000);
				});
			});
		});
	});
}

