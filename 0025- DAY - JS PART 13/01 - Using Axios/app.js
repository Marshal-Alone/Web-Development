let url = "https://catfact.ninja/fact";
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");

//using axios
async function get_fact() {
	try {
		let response = await axios.get(url);
		let fact = response.data.fact;

		return fact;
		// NO NEED of .json()-> let data = await response.json();
	} catch (error) {
		console.log(error);
		return error;
	}
}

btn.addEventListener("click", async () => {
	h3.innerText = await get_fact();
	console.log(h3.innerText);
});

//
//
//
function old_code() {
	async function get_fact() {
		try {
			let response = await fetch(url);
			let data = await response.json();
			let fact = data.fact;
			console.log(fact);
		} catch (error) {
			console.log(error);
		}
	}
}
