"use scrict"
import { TodoList } from "./components/TodoList.js";
import { fetchJSON } from "./fonctions/api.js";
import { createElement } from "./fonctions/dom.js";
try {
  /** va charger les todos */
 const todos = await fetchJSON(
    "/todolist/json.json"
  ); 
console.log(todos)
/** va affecter les todos via le constructor*/
  const list = new TodoList(todos);
  /** va gerer les li via appendTo */
  list.appendTo(document.querySelector("#todolist"), 20);
} catch (e) {
  const alertEl = createElement("div", {
    class: "alert alert-danger m-2",
    role: "alert",
  });
  alertEl.innerText = "impossible de charger les elements";
  document.body.prepend(alertEl);
  console.error(e);
}