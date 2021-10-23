import "../todo-item/todo-item.ts";
import "../new-todo-form/new-todo-form";

import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "../../interfaces/todo-item.interface";
import { styles } from "./styles";

@customElement("todo-list")
export class ToDoList extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  listItems: Task[] = [
    {
      completed: 0,
      title: "hola",
      description: "Asdf",
      deadline: new Date(),
      creation_date: new Date(),
    },
    {
      completed: 1,
      title: "hola",
      description: "Asdf",
      deadline: new Date(),
      creation_date: new Date(),
    },
  ];

  @property({ type: Boolean })
  showCreateTaskForm = false;

  render(): TemplateResult {
    return html` <div class="todo-list-container">
      <div class="todo-title">
        <h1>tasKs</h1>
        <button @click=${this.createTask}>Crear task</button>
      </div>
      <div class="new-todo-form" ?hidden="${!this.showCreateTaskForm}">
        <new-todo-form></new-todo-form>
      </div>

      <div class="tasks">
        <ul>
          ${this.listItems.map(
            (item) => html`<li><todo-item .item="${item}"></todo-item></li>`
          )}
        </ul>
      </div>
    </div>`;
  }

  createTask(): void {
    this.showCreateTaskForm = !this.showCreateTaskForm;
  }
}
