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
  listItems: Task[] = [];

  @property({ type: Boolean })
  showCreateTaskForm = false;

  connectedCallback(): void {
    super.connectedCallback();

    this.getFromLocalStorage();
  }

  render(): TemplateResult {
    const tasksOrMessage = html`${this.listItems.length > 0
      ? html`<ul>
          ${this.listItems.map(
            (item) => html`<li><todo-item .item="${item}"></todo-item></li>`
          )}
        </ul>`
      : html`<span class="empty-tasks">Aún no hay tareas...</span>`}`;

    const showCleanButton =
      this.listItems.length > 0
        ? html`<button class="clean-btn" @click=${this.cleanTasks}>
            Borrar tareas
          </button>`
        : "";
    return html`
      <div class="todo-list-container">
        <div class="todo-title">
          <h1>tasKs</h1>
          <button
            @click=${this.createTask}
            ?disabled="${this.showCreateTaskForm}"
          >
            Crear tarea
          </button>
        </div>

        <div
          class="new-todo-form ${this.showCreateTaskForm
            ? "visible"
            : "hidden"}"
        >
          <new-todo-form
            @new-task="${this.newTask}"
            @cancel-create-task="${this.cancelCreateTask}"
          ></new-todo-form>
        </div>

        <div class="tasks ${!this.showCreateTaskForm ? "visible" : "hidden"}">
          ${tasksOrMessage} ${showCleanButton}
        </div>
      </div>
    `;
  }

  cleanTasks(): void {
    this.listItems = [];
    this.saveToLocalStorage();
  }
  createTask(): void {
    this.showCreateTaskForm = !this.showCreateTaskForm;
  }

  newTask(e: CustomEvent): void {
    if (e.detail) {
      this.listItems.push(e.detail);
      this.showCreateTaskForm = false;
      this.saveToLocalStorage();

      // TODO ORDER BY DEADLINE DATE
    }
  }

  cancelCreateTask(): void {
    this.showCreateTaskForm = false;
  }
  saveToLocalStorage(): void {
    localStorage.setItem("tasks", JSON.stringify(this.listItems));
  }

  getFromLocalStorage(): void {
    const list = localStorage.getItem("tasks");
    if (list) {
      this.listItems = JSON.parse(list) as Task[];
    }
  }
}
