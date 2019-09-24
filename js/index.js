const form = document.querySelector('.form');
const deleteButton = document.querySelector('.delete-button');
const htmlTodoList = document.querySelector('.list-wrap');
const todoInput = document.querySelector('.todo-input');

// Define the key to work with local storage.
const localStorageKey = 'output';

// Emulate exported module to work with localStorage.
// You can use such modules when using bundlers.
// Example: `import ls from './localStorage'`.
const ls = {
  get: (key) => JSON.parse(localStorage.getItem(key)),
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  clear: () => {
    localStorage.clear();
  },
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // If todos in localStorage is null, assign [].
  const storedTodos = ls.get(localStorageKey) || [];
  const newTodo = todoInput.value;

  // Update list in storage with already stored todos + new todo.
  ls.set(localStorageKey, [...storedTodos, newTodo]);

  // Add todos as children of htmlTodoList (<ol>).
  htmlTodoList.innerHTML += `<li>${newTodo}</li>`;

  // Show 'Delete all' button and clear input.
  deleteButton.classList.remove('none');
  clearInput();
});

deleteButton.addEventListener('click', function() {
  // Hide 'Delete all' button.
  this.classList.add('none');

  // Remove children of htmlTodoList.
  htmlTodoList.innerHTML = '';

  // Clear localStorage and input.
  ls.clear();
  clearInput();
});

const clearInput = () => {
  todoInput.value = '';
  todoInput.focus();
};

const displayTodos = () => {
  const storedTodos = ls.get(localStorageKey) || [];

  // Show 'Delete all' button if todos length > 0.
  if (storedTodos.length > 0) {
    deleteButton.classList.remove('none');
  }

  // Push all todos from localStorage as children of htmlTodoList.
  storedTodos.forEach((todo) => {
    htmlTodoList.innerHTML += `<li>${todo}</li>`;
  });
};

displayTodos();
