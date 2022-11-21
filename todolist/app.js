import { TodoList } from "./components/todolist.js";
import { fetchJSON } from "./fonctions/api.js";
import { createElement } from "./fonctions/dom.js";
try {
  const todos = await fetchJSON(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  const list = new TodoList(todos);
  list.appendTo(document.querySelector("#todolist"));
} catch (e) {
  const alertEl = createElement("div", {
    class: "alert alert-danger m-2",
    role: "alert",
  });
  alertEl.innerText = "impossible de charger les elements";
  document.body.prepend(alertEl);
  console.error(e);
}
