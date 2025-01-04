let url = "http://universities.hipolabs.com/search?count=India&state-province=";
let country = "india";

let input = document.querySelector("input");
let btn = document.querySelector("button");

async function get_colleges(state) {
	try {
		let response = await axios.get(url + state);
		let clg_arr = response.data;
		return clg_arr;
	} catch (error) {
		console.log(error);
		return []; //empty clg arr
	}
}

btn.addEventListener("click", async () => {
	console.log("getting data....");
	let state = input.value;
	console.log(state);
	let clg_arr = await get_colleges(state);
	console.log(state);

	if (clg_arr.length > 0) {
		//show all uni

		//filter based on state
		let filteredClgArr = clg_arr.filter(
			(clg) =>
				clg["state-province"] &&
				clg["state-province"].toLowerCase() === state.toLowerCase()
		);
		show(filteredClgArr);
	} else {
		list.innerText = "No clg found";
		list.style.color = "red";
	}
});

let list = document.querySelector("ul");
function show(clg_arr) {
	//empty curr list
	list.innerText = "";
	// list.innerText = '';
	for (clg of clg_arr) {
		let li = document.createElement("li");
		li.innerText = clg.name;
		list.append(li);
		console.log(clg.name);
	}
}

//using map function to extract individual clg

btn.addEventListener("dblclick", async (event) => {
	let country = input.value;
	let data = await get_colleges(country);

	let uni_names_html = data.map((uni) => `<li>${uni.name}</li>`).join("");
    list.innerHTML = uni_names_html;

});
