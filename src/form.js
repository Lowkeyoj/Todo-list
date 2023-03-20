import { input, list } from ".";

export const addToLIst = function(){
  const l1 = document.createElement("li");
  l1.textContent = input.value
  l1.onclick = createPopupForm
  
  list.appendChild(l1);
  

}

export function createPopupForm() {
    // Create the form element
    const that = this

    const form = document.createElement("form");
    form.setAttribute("id", "popup-form");
  

    const overlay = document.createElement("div");
  overlay.classList.add("popup-overlay");


    // Create the title input element
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("id", "title-input");
    titleInput.setAttribute("placeholder", "Title");
    form.appendChild(titleInput);
  
    // Create the description input element
    const descInput = document.createElement("input");
    descInput.setAttribute("type", "text");
    descInput.setAttribute("name", "description");
    descInput.setAttribute("id", "desc-input");
    descInput.setAttribute("placeholder", "Description");
    form.appendChild(descInput);
  
    // Create the due date input element
    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("name", "dueDate");
    dueDateInput.setAttribute("id", "due-date-input");
    dueDateInput.setAttribute("placeholder", "Due Date");
    form.appendChild(dueDateInput);
  
    // Create the priority input element
    const priorityInput = document.createElement("select");
    priorityInput.setAttribute("name", "priority");
    priorityInput.setAttribute("id", "priority-input");
    const options = ["Low", "Medium", "High"];
    for (var i = 0; i < options.length; i++) {
      var option = document.createElement("option");
      option.setAttribute("value", options[i]);
      option.textContent = options[i];
      priorityInput.appendChild(option);
    }
    form.appendChild(priorityInput);
  
    // Create the notes textarea element
    const notesTextarea = document.createElement("textarea");
    notesTextarea.setAttribute("name", "notes");
    notesTextarea.setAttribute("id", "notes-textarea");
    notesTextarea.setAttribute("placeholder", "Notes");
    form.appendChild(notesTextarea);
  
    // Create the submit button element
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submit-button");
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);
  
    // Add event listener to the form to handle form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      that.onclick = null;
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      console.log(data); // Do something with the form data
    // Close the popup form
      popup.style.display = "none";
      popup.remove()
    });
  
    // Create the popup element
    const popup = document.createElement("div");
    popup.setAttribute("id", "popup-container");
    popup.classList.add("popup");
    popup.appendChild(form);
  
    // Add the popup element to the document body
    document.body.appendChild(popup);
  
  
    // Center the popup
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;
    popup.style.left = (window.innerWidth - popupWidth) / 2 + "px";
    popup.style.top = (window.innerHeight - popupHeight) / 2 + "px";
  
    // Show the popup form
    popup.style.display = "block";

    console.log(this)
  }