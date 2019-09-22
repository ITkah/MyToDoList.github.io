var formDo = document.getElementById("newItemForm"),
	delet = document.querySelector(".filter"),
	listBox = document.querySelector(".list-wrap"),
	inputUser = document.getElementById("itemDescription");

let arrDo = [];
	
formDo.addEventListener("submit", function(e){
	e.preventDefault();
	
	let itemDinamic = document.getElementsByTagName("li"), //с by возвращяет динамику
		output = inputUser.value;
	
	arrDo.push(output);

	localStorage.setItem('output', JSON.stringify(arrDo));

	let localOutput = JSON.parse(localStorage.getItem('output'));
		
	listBox.innerHTML += "<li>" + localOutput + "</li>";
	
	inputUser.value = '';
	inputUser.focus();
	
	delet.classList.add("none");
	
	deletItem(itemDinamic);	
});
	



function deletItem (itemDinamic) {
	[].forEach.call(itemDinamic, function(todo){
		todo.addEventListener("click", function () {
			this.classList.add("delete-li");
			setTimeout(() => {
				this.parentNode.removeChild(this);
			},500);
		});
		if(itemDinamic.length >= 2) {
			delet.classList.remove("none");
		}
	});
}

delet.addEventListener("click", function() {
	this.classList.add("none");
	listBox.innerHTML = '';
	localStorage.clear();
	inputUser.value = '';
});