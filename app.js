let input = document.getElementById("input");
let todobox = document.getElementById("todobox");
let button = document.getElementById("button");

input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    add();
  }
});

function add() {
  if (input.value == "") {
    alert("Write Something");
  } else {
    let listitem = document.createElement("li");
    listitem.innerHTML = input.value;
    todobox.appendChild(listitem);

    listitem.addEventListener("click", function () {
      this.classList.toggle("done");
    });

    input.value = "";

    let dltIcon = document.createElement("delete");
    dltIcon.className = "fas fa-times";
    dltIcon.addEventListener("click", function () {
      listitem.remove();
    });
    listitem.appendChild(dltIcon);

    let editIcon = document.createElement("Edit");
    editIcon.className = "fa-solid fa-pen-to-square";
    editIcon.addEventListener("click", function () {
      var a = prompt(
        "enter value you want to change",
        listitem.firstChild.nodeValue
      );
      listitem.firstChild.nodeValue = a;
    });
    listitem.appendChild(editIcon);
  }
}
