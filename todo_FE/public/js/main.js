let todoInputElement = document.getElementById("todoInput");
let todoAddBtnElement = document.getElementById("todoBtn");
let todoListElement = document.getElementById("todoList");

// function inputText() {
//   let listCreate = document.createElement("li");
//   listCreate.innerText = todoInputElement.value;
//   todoListElement.appendChild(listcreate());
// }


todoAddBtnElement.addEventListener("click", addTodo);

function addTodo() {
	const listCreate = document.createElement("li");
	// const spanTag = document.createElement("span");
	listCreate.innerHTML = todoInputElement.value;
	todoListElement.appendChild(listCreate);
	todoInputElement.value = '';  // 입력 후 텍스트 비우기.

	const delBtn = document.createElement("button");
	delBtn.innerText = "삭제";
	todoListElement.appendChild(delBtn);
	delBtn.addEventListener("click", function () {
		todoListElement.removeChild(listCreate)
	});

	const udtBtn = document.createElement("button");
	udtBtn.innerText = "수정";
	todoListElement.appendChild(udtBtn)


}

function todoUpdate() {
	alert("TO-DO 수정하는 버튼 구현중임");
}



