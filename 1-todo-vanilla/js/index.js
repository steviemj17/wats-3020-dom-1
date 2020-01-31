document.addEventListener("DOMContentLoaded", (event) => {
  document.addEventListener("submit", (event) => {
    event.preventDefault();

    let itemInput = document.querySelector("input[name = 'item-input']");
    let itemValue = itemInput.value;
    list.appendChild(newItemEl);

    if (itemValue.length !== 0) {

      let newItemEl = document.createElement("li");
      let newCheckBox = document.createElement("input");
      newCheckBox.setAttribute("type", "checkbox");
      newItemEl.appendChild(newCheck);
      let newLabel = document.createElement("label");
      newLabel.textContent = itemValue;
      newItemEl.appendChild(newLabel);


      let list = document.querySelector('.todo-list');
      list.appendChild(newItemEl);

      itemInput.value = '';
      newCheckBox.addEventListener("click", function (event) {

        if (this.nextSibling.style.textDecortation == "line-through") {
          this.nextSibling.style.textDecortation == "";
        } else {
          this.nextSibling.style.textDecortation == "line-through";
        }
      });

    }
  }) // form submit
}) // document ready