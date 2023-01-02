const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");

const HIDDEN = "hidden";
const USER_KEY = "user";

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN);
  const username = loginInput.value;
  localStorage.setItem(USER_KEY, username);
  paintGreeting(username);
}

function paintGreeting(name) {
  greeting.innerText = "Hello " + name;
  greeting.classList.remove(HIDDEN);
  todoForm.classList.remove(HIDDEN);

  const button = document.createElement("button");
  button.innerText = "수정";
  button.classList.add("updateBtn");
  button.addEventListener("click", updateGreeting);
  greeting.appendChild(button);
}

function updateGreeting() {
  localStorage.removeItem("user");
  location.reload();
}

const saveUsername = localStorage.getItem(USER_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreeting(saveUsername);
}
