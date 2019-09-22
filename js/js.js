var formDo = document.getElementById("newItemForm"),
	delet = document.querySelector(".filter"),
	listBox = document.querySelector(".list-wrap"),
	inputUser = document.getElementById("itemDescription");

let arrDo = [];

formDo.addEventListener("submit", function (e) {
	e.preventDefault();

	let output = inputUser.value;

	arrDo.push(output);

	localStorage.setItem('output', JSON.stringify(arrDo));

	displayTodo();
	clearInput();
	deletItem();
});

delet.addEventListener("click", function () {
	this.classList.add("none");
	listBox.innerHTML = '';
	clearLs();
	inputUser.value = '';
});

function displayTodo() {
	let localOutput = JSON.parse(localStorage.getItem('output')),
		toDoList = '';
	
	for (let i = 0; i < localOutput.length; i++) {
		toDoList += "<li>" + localOutput[i] + "</li>";
	}

	listBox.innerHTML = toDoList;
}


function deletItem() {
	let itemDinamic = document.getElementsByTagName("li");
	[].forEach.call(itemDinamic, function (todo) {
		todo.addEventListener("click", function () {
			this.classList.add("delete-li");
			setTimeout(() => {
				this.parentNode.removeChild(this);
			}, 500);
		});
		if (itemDinamic.length >= 2) {
			delet.classList.remove("none");
		}
	});
}

function clearInput() {
	inputUser.value = '';
	inputUser.focus();
}

function clearLs() {
	localStorage.clear();
}