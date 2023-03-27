var elForm = document.querySelector(`.todo_form`);
var alTodoList = document.querySelector(`.todo_list`);
var elInput = document.querySelector(`.todo_input`);
var elList = document.querySelector(`.todo_input-1`);
var elList1 = document.querySelector(`.todo_input-2`);
var allTodo = [
  {
    id: 1,
    text: `Frontend Developer`,
    compane: `Google`,
    salary: `4000$`,
    isCompleted: false,
  },
];

function renderAllTodo() {
  alTodoList.innerHTML = null;
  elList.innerHTML = null;
  elList1.innerHTML = null;
  var alLi = ``;
  for (var i = 0; i < allTodo.length; i++) {
    alLi =
      alLi +
      `
       <li class="card">
            <div class="card-header"> ${allTodo[i].text}</div>
        <div class="card-body">
            <p class="card-title">Company:<b>${allTodo[i].compane}</b></p>
            <p class="card-text">Salary:<b>${allTodo[i].salary}</b></p>
        </div> `;
  }
  alTodoList.innerHTML = alLi;
}

function onSubmit(evt) {
  evt.preventDefault();

  var newTodo = {
    id: 1,
    text: elInput.value.trim(),
    isCompleted: false,
  };

  allTodo.push(newTodo);

  elInput.value = null;
  renderAllTodo();
  console.log(allTodo);

  var newTodo = {
    id: 1,
    salary: elList1.value.trim(),
    isCompleted: false,
  };

  allTodo.push(newTodo);

  elList1.value = null;
  renderAllTodo();
  console.log(allTodo);

  var newTodo = {
    id: 1,
    compane: elList.value.trim(),
    isCompleted: false,
  };

  allTodo.push(newTodo);

  elList.value = null;
  renderAllTodo();
  console.log(allTodo);
}

elForm.addEventListener(`submit`, onSubmit);

renderAllTodo();
