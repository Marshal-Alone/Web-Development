let first = document.querySelector("#first");
let second = document.querySelector("#second");

let url = "https://catfact.ninja/fact";

//using .then()
console.log("-------------USING .then()-------------");
fetch(url)
	.then((response1) => {
		return response1.json(); //return response and pass to next function as data
	})
	.then((data1) => {
		//data returned from previous function
		console.log("FACT 1", data1.fact);
		first.innerHTML = `<u>USING .then() </u>: ${data1.fact}`;

		return fetch(url); //new call
	})
	.then((response2) => {
		return response2.json();
	})
	.then((data2) => {
		console.log("FACT 2 :", data2.fact);
	})
	.catch((error) => {
		console.log(error);
	});

//using async await

async function get_fact() {
	try {
		let response = await fetch(url);
		let data = await response.json();
		let fact = data.fact;
		second.innerHTML = `<u>USING async</u> : ${fact}`;
		console.log("FACT 4 :", fact);
	} catch (error) {
		console.log(error);
	}
}

get_fact();
get_fact();
// get_fact();
// get_fact();
//
