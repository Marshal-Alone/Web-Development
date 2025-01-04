let img = document.querySelector("img");
const url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

async function get_pic() {
	console.log("Getting img ....");
	try {
		let response = await axios.get(url);
		return response.data.message;
	} catch (error) {
		console.log(error);
	}
}

btn.addEventListener("click", async () => {
	let src = await get_pic();
	console.log(src);
	img.src = src;
});
