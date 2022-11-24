import { createElement, cloneTemplate } from "../fonctions/dom.js";

/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 *
 */
export class TodoList {
  /** @type {Todo[]} objet avec tous les todos (id,title,completed)*/
  #todos = [];
  /** @type {HTMLUListelement}li créée a partir des todos */
  #listElement = [];
  /**
   *
   * @param {Todo[]} todos
   */
  constructor(todos) {
    this.#todos = todos;
  }
  /**
   *
   * @param {HTMLelement} element
   */
  appendTo(element) {
    /**
     * @type {HTMLelements}input et boutons tri
     */
    element.append(cloneTemplate("todolist-layout"));
    this.#listElement = element.querySelector(".list-group");
    /** rajoute chaque li dans list-group*/
    for (let todo of this.#todos) {
      const t = new TodoListItem(todo);
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
    this.#listElement.addEventListener("delete", ({ detail: todou }) => {
      this.#todos = this.#todos.filter((t) => t !== todou);
      console.log(this.#todos);
    });
    this.#listElement.addEventListener("toggle", ({ detail: todou }) => {
      todou.completed = !todou.completed;
      console.log(this.#todos);
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
    this.#todos.push(todo);

    const item = new TodoListItem(todo);
    this.#listElement.prepend(item.returnItem);
    form.reset();
  }
  /**
   *
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
 * @return {HtlmElement} elementItem
 */
class TodoListItem {
  #element;
  #todo;
  /** @type{Todo}
   *
   */
  constructor(todo) {
    this.#todo = todo;
    const id = `todo-${todo.id}`;
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
   * @return {HTMLelement}
   */
  get returnItem() {
    return this.#element;
  }
  /**efface l'item en cours */
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
    // this.#todo.completed = checkbox.checked ? true : false;
    const event = new CustomEvent("toggle", {
      detail: this.#todo,
      bubbles: true,
    });
    this.#element.dispatchEvent(event);
  }
}
