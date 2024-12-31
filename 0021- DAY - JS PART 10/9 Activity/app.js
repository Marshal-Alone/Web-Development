const input = document.querySelector("input");
const btn = document.querySelector("button");

const ul = document.querySelector(".container3 ul");


btn.addEventListener("click", function (e) {
    let task = input.value;
    task = input.value.trim();
    if (task != '') {
        let new_task = document.createElement("li");
        new_task.innerText = task;
        ul.append(new_task);
        input.value = '';

        try {
            let lis = document.querySelectorAll("li");
            console.log(lis);
            for (li of lis) {
                li.addEventListener("click", function () {
                    console.log("removing task...");
                    this.remove();
                })
            }
        } catch (e) {
            console.log(e);
            console.log("task not found");
        }
    } else {
        console.log('empty value');
    }
})

