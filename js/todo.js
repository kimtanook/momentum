const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

toDoForm.addEventListener("submit", toDoSubmit);

// todo 그리기
function paintToDo(todolist) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = todolist.id;
  li.appendChild(span);
  span.innerText = todolist.text + "\u00a0\u00a0\u00a0\u00a0\u00a0"; // \u00a0 은 공백이다.
  li.appendChild(button);
  li.appendChild(button);
  button.classList.add("btn");
  button.innerText = "삭제";
  button.addEventListener("click", deleteToDo);
  toDoList.appendChild(li);
}

// todo 제출
function toDoSubmit(submitEvent) {
  submitEvent.preventDefault();
  // toDoInput.value = "";
  const newTodo = toDoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos(newTodo);
}

// todo 저장
function saveToDos(newTodo) {
  localStorage.setItem("toDos", JSON.stringify(toDos));
  // "toDos" 부분은 key, toDos배열을 문자열로 바꿔서(JSON.stringify 사용) value로 저장
}

//todo 삭제
function deleteToDo(deleteEvent) {
  const li = deleteEvent.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // filter로 doDos의 각 값을 toDo로 바꿔서 각각 호출 후 비교. true면 유지. false면 삭제.
  saveToDos(); // todo 저장
}

const saveToDoList = localStorage.getItem(USER_KEY);
const savedToDos = localStorage.getItem("toDos");

// todo 데이터가 있다면 todo그리기로 보여주기
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
