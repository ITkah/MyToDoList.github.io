(function () {

  const outputTodoItem = document.querySelector('.list-wrap'),
        mainForm = document.querySelector('.form'),
        deleteButton = document.querySelector('.delete-button'),
        inputCreateNewToDo = document.querySelector('.todo-input');

  mainForm.addEventListener('submit', function (e) {
    e.preventDefault();
    outputTodoItem.innerHTML += '<li>' + inputCreateNewToDo.value + '</li>';
    store();
    clearInput();
  })

  deleteButton.addEventListener('click', function() {
    localStorage.clear();
    outputTodoItem.innerHTML = '';
    clearInput();
  });

  outputTodoItem.addEventListener('click', function (e) {
    let t = e.target;
    if (t.classList.contains('delete-li')) {
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('delete-li');
    }
    store();
  }, false)

  function store() {
    window.localStorage.myitems = outputTodoItem.innerHTML;
  }

  function clearInput () {
    inputCreateNewToDo.value = '';
    inputCreateNewToDo.focus();
  };

  function getValues() {
    let storedValues = window.localStorage.myitems;
    if (!storedValues) {
      outputTodoItem.innerHTML = '';
    } else {
      outputTodoItem.innerHTML = storedValues;
    }
  }
  getValues();
})();