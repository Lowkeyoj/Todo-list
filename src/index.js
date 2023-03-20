import "./popUpForm.css";
import "./main.css";
import { addToLIst } from "./form";

export const input = document.querySelector("#task-input");
export const list = document.querySelector("#task-list");
const addButton = document.querySelector("#add-button");
const sidebar = document.querySelector("sidebar");



addButton.addEventListener("click", (event) => { 
                            event.preventDefault();
                            return addToLIst();             }
)

