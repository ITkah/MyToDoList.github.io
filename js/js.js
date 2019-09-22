var formDo = document.getElementById("newItemForm"),
	delet = document.querySelector(".filter"),
	listBox = document.querySelector(".list-wrap"),
	inputUser = document.getElementById("itemDescription");

let arrDo = [];

formDo.addEventListener("submit", function (e) {
	e.preventDefault();

	let itemDinamic = document.getElementsByTagName("li"), //с by возвращяет динамику
		output = inputUser.value;

	arrDo.push(output);

	localStorage.setItem('output', JSON.stringify(arrDo));

	let localOutput = JSON.parse(localStorage.getItem('output'));

	displayTodo(localOutput);

	clearInput();
	deletItem(itemDinamic);

});


delet.addEventListener("click", function () {
	this.classList.add("none");
	listBox.innerHTML = '';
	clearLs();
	inputUser.value = '';
});

function displayTodo(todoArr) {
	let toDoList = '';
	for (let i = 0; i < todoArr.length; i++) {
		toDoList += "<li>" + todoArr[i] + "</li>";
	}
	listBox.innerHTML = toDoList;
}

function deletItem(itemDinamic) {
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