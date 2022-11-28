import { cloneTemplate } from "../fonctions/dom.js";

/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 *
 */
export class TodoList {
  /** @type {Todos[]} objet avec tous les todos (id,title,completed)*/
  #todos = [];
  /** @type {HTMLUListelement}li créée a partir des todos */
  #listElement = [];
  /**
   *construit une liste de todos
   * @param {Todo[]} todos
   */
  constructor(todos) {
    this.#todos = todos;
  }
  /**
   *methode pour afficher les todos daans le dom grace à des <li>
   * @param {HTMLelement} element
   */
  nb = 0;
  appendTo(element, nb) {
    /**
     * @type {HTMLelements}input et boutons tri
     */
    //installe le formulaire de saisie et les boutons de tri
    element.append(cloneTemplate("todolist-layout"));
    //initialise la liste des li à installer
    this.#listElement = element.querySelector(".list-group");
    /** rajoute chaque li dans list-group*/
    for (let i = 0; i < nb; i++) {
      // t est une nouvel LI construit à partir du Todo choisi
      const t = new TodoListItem(this.#todos[i]);
      this.#listElement.append(t.returnItem);
    }
    /**saisie d'un todo dans form et creation d'un TodoListItem */
    element
      .querySelector("form")
      .addEventListener("submit", (e) => this.#onSubmit(e));
    /**tri des todos avec  tout, a faire, fait */
    element.querySelectorAll(".btn-group button").forEach((button) => {
      button.addEventListener("click", (e) => this.#toggleFilter(e));
    });
    /**l'event delete remonte dans this.#listElement  l'objet todo qui vient d"etre supprimé et  le suupprime des #todos */
    this.#listElement.addEventListener("delete", ({ detail: todou }) => {
      this.#todos = this.#todos.filter((t) => t !== todou);
    });
    /** l'event toogle met a jour le chgt 'completed' dans #todos */
    this.#listElement.addEventListener("toggle", ({ detail: todou }) => {
      todou.completed = !todou.completed;
    });
  }
  /**
   *
   * @param {pointerEvent} e
   * @returns {HTMLelement} todo
   */
  #onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const title = new FormData(form).get("title").toString().trim();
    if (title === "") return;
    const todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    // Ajoute le nouveau todo à this.#todos, puis crée le li corrspondantet le rejoute dans le dom
    this.#todos.push(todo);
    const item = new TodoListItem(todo);
    this.#listElement.prepend(item.returnItem);
    form.reset();
  }
  /**
   * affiche tout, à faire, fait via les classslist
   * @param {pointerEvent} e
   */
  #toggleFilter(e) {
    e.preventDefault();
    const filter = e.currentTarget.dataset.filter;
    e.currentTarget.parentElement
      .querySelector(".active")
      .classList.remove("active");
    e.currentTarget.classList.add("active");

    if (filter === "todo") {
      this.#listElement.classList.add("hide-completed");
      this.#listElement.classList.remove("hide-todo");
    } else if (filter === "done") {
      this.#listElement.classList.add("hide-todo");
      this.#listElement.classList.remove("hide-completed");
    } else {
      this.#listElement.classList.remove("hide-todo");
      this.#listElement.classList.remove("hide-completed");
    }
  }
}
/**
 * créer une <li> avce les elemsnts du todo en entrée
 * @return {HtlmElement} elementItem
 */
class TodoListItem {
  #element;
  #todo;
  /** @type{Todo}
   * {id:id, title:"", completed:false}
   */
  constructor(todo) {
    this.#todo = todo;
    const id = `todo-${todo.id}`;
    //crée un li à partir du template
    const li = cloneTemplate("todolist-item").firstElementChild;
    this.#element = li;
    const checkbox = li.querySelector("input");
    checkbox.setAttribute("id", id);
    if (todo.completed) {
      checkbox.setAttribute("checked", "");
    }
    const label = li.querySelector("label");
    label.setAttribute("for", id);
    label.innerText = todo.title;
    const button = li.querySelector("button");
    /**rajoute la classlist is-completed */
    this.#toggle(checkbox);
    button.addEventListener("click", (e) => this.efface(e));
    checkbox.addEventListener("change", (e) => this.#toggle(e.currentTarget));
  }
  /**
   * getter renvoie le li
   * @return {HTMLelement}
   */
  get returnItem() {
    return this.#element;
  }
  /**efface l'item en cours  et crée un 'delete' dans this.#element qui remonte dans listElement*/
  efface(e) {
    e.preventDefault();
    const event = new CustomEvent("delete", {
      detail: this.#todo,
      bubbles: true,
      cancelable: true,
    });
    this.#element.dispatchEvent(event);
    this.#element.remove();
  }
  /**
   * Change l'etat des checkbox
   * @param {HTMLInputElement} checkbox
   */
  #toggle(checkbox) {
    checkbox.checked
      ? this.#element.classList.add("is-completed")
      : this.#element.classList.remove("is-completed");
    /**  quand on toggle cela cree un event 'toggle' dont le detail est this.#todo, qui remonte de l'element this.#element vers this.#listElement*/
    const event = new CustomEvent("toggle", {
      detail: this.#todo,
      bubbles: true,
    });
    this.#element.dispatchEvent(event);
  }
}
