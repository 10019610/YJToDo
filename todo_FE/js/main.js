let todoInputElement = document.getElementById("todoInput");
let todoAddBtnElement = document.getElementById("todoBtn");
let todoListElement = document.getElementById("todoList");

// function inputText() {
//   let listCreate = document.createElement("li");
//   listCreate.innerText = todoInputElement.value;
//   todoListElement.appendChild(listcreate());
// }

// todoInputElement.addEventListener("click");

todoAddBtnElement.addEventListener("click", addTodo);

function addTodo() {
  const listCreate = document.createElement("li");
  listCreate.innerHTML = todoInputElement.value;
  todoListElement.appendChild(listCreate);
}

function todoUpdate() {
  alert("TO-DO 수정하는 버튼 구현중임");
}

function todoDelite() {
  alert("TO-DO 삭제하는 버튼 구현중입니다.");
}
