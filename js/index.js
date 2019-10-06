// const form = document.querySelector('.form'),
//       deleteButton = document.querySelector('.delete-button'),
//       htmlTodoList = document.querySelector('.list-wrap'),
//       todoInput = document.querySelector('.todo-input');

// // Define the key to work with local storage.
// const localStorageKey = 'output';

// // Emulate exported module to work with localStorage.
// // You can use such modules when using bundlers.
// // Example: `import ls from './localStorage'`.
// const ls = {
//   get: (key) => JSON.parse(localStorage.getItem(key)),
//   set: (key, value) => {
//     localStorage.setItem(key, JSON.stringify(value));
//   },
//   clear: () => {
//     localStorage.clear();
//   },
// };

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // If todos in localStorage is null, assign [].
//   const storedTodos = ls.get(localStorageKey) || [];
//   const newTodo = todoInput.value;

//   // Update list in storage with already stored todos + new todo. 
//   ls.set(localStorageKey, [...storedTodos, newTodo]);

//   // Add todos as children of htmlTodoList (<ol>).
//   htmlTodoList.innerHTML += `<li>${newTodo}</li>`;

//   //Call deleteItem
//   deleteItem();

//   // Show 'Delete all' button and clear input.
//   deleteButton.classList.remove('none');
//   clearInput();
// });

// deleteButton.addEventListener('click', function() {
//   // Hide 'Delete all' button.
//   this.classList.add('none');

//   // Remove children of htmlTodoList.
//   htmlTodoList.innerHTML = '';

//   // Clear localStorage and input.
//   ls.clear();
//   clearInput();
// });

// const clearInput = () => {
//   todoInput.value = '';
//   todoInput.focus();
// };

// function deleteItem(){
//   const liTodoItem = document.getElementsByTagName('li');

//   [].forEach.call(liTodoItem,function(elementLi){
//     elementLi.addEventListener('click', function () {
//       this.parentNode.removeChild(this);
//     });
//   });
// }

// const displayTodos = () => {
//   const storedTodos = ls.get(localStorageKey) || [];

//   // Show 'Delete all' button if todos length > 0.
//   if (storedTodos.length > 0) {
//     deleteButton.classList.remove('none');
//   }

//   // Push all todos from localStorage as children of htmlTodoList.
//   storedTodos.forEach((todo) => {
//     htmlTodoList.innerHTML += `<li>${todo}</li>`;
//   });

//   //Call deleteItem
//   deleteItem();

// };

// displayTodos();


(function () {

  const list = document.querySelector('.list-wrap'),
        form = document.querySelector('.form'),
        deleteButton = document.querySelector('.delete-button'),
        item = document.querySelector('.todo-input');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
    store();
    clearInput();
  })

  deleteButton.addEventListener('click', function() {
    this.classList.add('none');
    htmlTodoList.innerHTML = '';
    clearInput();
  });

  list.addEventListener('click', function (e) {
    let t = e.target;
    if (t.classList.contains('delete-li')) {
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('delete-li');
    }
    store();
  }, false)

  function store() {
    window.localStorage.myitems = list.innerHTML;
  }

  function clearInput () {
    item.value = '';
    item.focus();
  };

  function getValues() {
    let storedValues = window.localStorage.myitems;
    if (!storedValues) {
      list.innerHTML = '';
    } else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();