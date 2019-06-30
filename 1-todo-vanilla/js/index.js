//TODO add event to listen to when DOM is ready to access
document.addEventListener("", event => {
  //TODO add event listener to signal that user is submitting form

  //TODO call a function to prevent the click from "bubbling up"

  //TODO add a selector that selects the input element with the attribute
  //name equal to "item-input"
    let itemInput = document.querySelector();

    let itemValue = itemInput.value;
    //test to be sure that user entered a value
    if (itemValue.length !== 0) {
      //create new item

      //TODO create a list item with a checkbox and a label containing the 
      //user input string
      

      //get a reference to list and append list item
      let list = document.querySelector('.todo-list');
      list.appendChild(newItemEl);
      //clear the user input
      itemInput.value = '';

      //add a click event listener that serves a toggle
      //TODO add click event toggle that strikes out text in label associated with list item
      newCheckBox.addEventListener("click", function (event) {
        if (this.nextSibling.style.textDecoration === "line-through") {
          this.nextSibling.style.textDecoration = ""
        } else {
          this.nextSibling.style.textDecoration = "line-through"
        }
      })
    }
})