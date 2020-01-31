document.addEventListener("DOMContentLoaded", (event) => {
  document.addEventListener("submit", (event) => {
    event.preventDefault();

    let itemInput = document.querySelector("input[name = 'item-input']");
    let itemValue = itemInput.value;
   

    if (itemValue.length !== 0) {

      let newItemEl = document.createElement("li");
      let newCheckBox = document.createElement("input");
      newCheckBox.setAttribute("type", "checkbox");
      newItemEl.appendChild(newCheckBox);
      let newLabel = document.createElement("label");
      newLabel.textContent = itemValue;
      newItemEl.appendChild(newLabel);


      let list = document.querySelector('.todo-list');
      list.appendChild(newItemEl);

      itemInput.value = '';
      newCheckBox.addEventListener("click", function (event) {

        if (this.nextSibling.style.textDecoration == "line-through") {
          this.nextSibling.style.textDecoration = "";
        } else {
          this.nextSibling.style.textDecoration = "line-through";
        }
      });

    }
  }) // form submit
}) // document ready