
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
    localStorage.clear();
    list.innerHTML = '';
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