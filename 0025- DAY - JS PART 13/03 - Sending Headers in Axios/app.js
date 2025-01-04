const url = "https://icanhazdadjoke.com";
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");

async function geta_joke() {
	try {
		//in this data come in form of html so wee need to pass header
		let response1 = await axios.get(url);
		// console.log(response1.data);

		const config = {
			headers: {
				Accept: "application/json",
			},
		};
		let response2 = await axios.get(url, config);
		console.log(response2.data);
		return response2.data.joke;
	} catch (error) {
		console.log(error);
	}
}

btn.addEventListener("click", async () => {
	console.log("Getting joke....");

	let joke = await geta_joke();
	h3.innerText = joke;
	console.log(joke);
});
