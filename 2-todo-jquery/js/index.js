//TODO add document ready function
(event => {
  //TODO wrap all code related to user submit  
  $("#todo-form").submit(event => {
    //TODO add code to keep event from "bubbling up"

    //need to find a single input but need it as a jquery object
    //TODO obtain the user input object and string value
    

    //check that user has input a value before proceeding
    if (itemValue.length !== 0) {

      //create new item
      // TODO create a new list item value with checkbox and label
  

      //get a reference to list and append list item
      $('.todo-list')[0].appendChild(newItemEl);

      //clear user input
      itemInput.val('');

      //set up toggle on check box click
      //TODO set up a checkbox toggle to strike out text when clicked
      
    }
  })
})