# Tutorials for WATS 3020 DOM 1

## 1-todo-vanilla
JavaScript can sometimes finish loading and start running before the actual HTML has finished loading. In order to make sure our code does not start running before that, we will add the `DOMContentLoaded` event.
1. TODO add event to listen to when DOM is ready to access
  ```JavaScript
  document.addEventListener("DOMContentLoaded", event => {
  ```

The biggest thing we need to implement is something that tells the page what to do when the Submit button is clicked. Here, we'll be using the "submit" event for the form. In addition, we need to make sure that all of the rest of the code is "wrapped" in the event. We also want to ensure that the default behavior for a form submit button does not occur.
2. TODO add event listener to signal that user is submitting form
  ```JavaScript
  document.addEventListener("submit", event => {
    // all code goes in here
  })
  ```
3. TODO add code to keep form default submit behavior from occurring
  ```JavaScript
  event.preventDefault();
  ```

The remainder of the program involves creating new `<li>`, `<input>`, `<label>` elements, giving them the appropriate content, and added them to the DOM. In addition, we want the checkbox to have an `click` event that lines-through the text when it's clicked.

4. TODO add a selector that selects the input element with the attribute name equal to "item-input"
  ```JavaScript
  let itemInput = document.querySelector("input[name=item-input]");
  ```
5. TODO create a list item with a checkbox and a label containing the user input string
  ```JavaScript
  let newItemEl = document.createElement('li');
  let newCheckBox = document.createElement('input');
  newCheckBox.setAttribute("type", "checkbox");
  newItemEl.appendChild(newCheckBox);
  let newLabel = document.createElement('label');
  newLabel.innerHTML = itemValue;
  newItemEl.appendChild(newLabel);
  ```
5. TODO add click event toggle that strikes out text in label associated with list item
6. TODO check if the textDecoration style on this.nextSibling is "line-through"
7. TODO set the textDecoration style on this.nextSibling to blank (empty string)
8. TODO set the textDecoration style on this.nextSibling to crossed out ("line-through")
  ```JavaScript
  newCheckBox.addEventListener("click", function (event) {
    if (this.nextSibling.style.textDecoration === "line-through") {
      this.nextSibling.style.textDecoration = "";
    } else {
      this.nextSibling.style.textDecoration = "line-through";
    }
  });
  ```

## 2-todo-jquery

1. TODO add document ready function
  ```JavaScript
  // preferred method for jQuery 3.0
  $(function() {
    //all code goes in here
  }

  // other methods work, such as
  $(document).ready(function() {
    // all code goes in here
  }
  ```
2. TODO wrap all code related to user submit
  ```JavaScript
  $("#todo-form").submit(function() {
    //all code goes in here
  })
  ```
3. TODO add code to keep form default submit behavior from occurring
  ```JavaScript
  event.preventDefault();
  ```
4. TODO select the DOM object with the name _item-input_ and assign its value to a variable called itemValue
  ```JavaScript
  let itemInput = $("input[name='item-input']");
  let itemValue = itemInput.val();
  ```
5. TODO append a new item to the todo list that is a `<li>` element with two children: an `<input>` with type checkbox and a `<label>` with the inner text of the value of itemValue
  ```JavaScript
    $('.todo-list').append("<li><input type='checkbox'></input><label>" + itemValue + "</label><li>");
  ``` 
6. TODO clear user input in the input box
  ```JavaScript
  itemInput.val('');
  ```
7. TODO add the code to make this function get added to every :checkbox on the change event
  ```JavaScript
  $(':checkbox').change(function (event) {
  ```

## 3-list

For this exercise you must set up HTML/CSS/JavaScript files and write code to create a list.  Once you've completed the lists above, you an use that code to help you do this.  

Once you have to current list working, modify the code such that when you click on the list to indicate done, it move the item to a "Done" list that you'll add to your HTML.  The "Done" list doesn't need to be in the form as it will not change.

You can use jQuery or Vanilla JS.