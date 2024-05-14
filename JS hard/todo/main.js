const addArea = document.getElementById("add-area");
const todo = document.getElementById("todo");
const addButton = document.getElementsByClassName("add-btn")[0];
const completedTodo = document.getElementById("completedTodo");

const todos = [];

function updateTodoList() {
  while (todo.firstChild) {
    todo.removeChild(todo.firstChild);
  }
  while (completedTodo.firstChild) {
    completedTodo.removeChild(completedTodo.firstChild);
  }

  todos.forEach((todoItem) => {
    const listItem = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", function () {
      const index = todos.indexOf(todoItem);
      todos.splice(index, 1);
      updateTodoList();
    });

    const statusSelect = document.createElement("select");
    statusSelect.options.add(new Option("未完了", "未完了"));
    statusSelect.options.add(new Option("進行中", "進行中"));
    statusSelect.options.add(new Option("完了", "完了"));
    statusSelect.value = todoItem.status;
    statusSelect.addEventListener("change", function () {
      todoItem.status = this.value;
      updateTodoList();
    });

    listItem.appendChild(document.createTextNode(todoItem.text));

    listItem.appendChild(statusSelect);
    if (todoItem.status === "完了") {
      listItem.appendChild(deleteButton);
      completedTodo.appendChild(listItem);
    } else {
      todo.appendChild(listItem);
    }
  });
}

addButton.addEventListener("click", addTodoItem);
function addTodoItem() {
  if (addArea.value === "") {
    alert("空欄です");
    return;
  }

  todos.push({ text: addArea.value, status: "未完了" });
  updateTodoList();
  addArea.value = "";
}

addArea.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodoItem();
  }
});
