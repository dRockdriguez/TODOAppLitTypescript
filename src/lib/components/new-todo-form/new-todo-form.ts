import "../todo-item/todo-item.ts";

import { html, LitElement, TemplateResult } from "lit";
import { customElement, property, query } from "lit/decorators.js";

import { styles } from "./styles";

@customElement("new-todo-form")
export class NewTodoForm extends LitElement {
  static styles = styles;

  @query("#title")
  taskTitle!: HTMLInputElement;
  @query("#description")
  taskDescription!: HTMLInputElement;
  @query("#status")
  taskStatus!: HTMLInputElement;
  @query("#deadline")
  taskDeadLine!: HTMLInputElement;

  @property({ attribute: false })
  errors: string[] = [];

  render(): TemplateResult {
    const hasErrors = html` <ul>
      ${this.errors.map((err) => html`<li>${err}</li>`)}
    </ul>`;

    return html`<form>
      ${hasErrors}
      <div class="form-group">
        <label for="title">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Título de la tarea..."
        />
      </div>
      <div class="form-group">
        <label for="description">Descripción</label>
        <textarea
          rows="6"
          id="description"
          name="description"
          placeholder="Descripción de la tarea"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="status">Estado</label>
        <select id="status" name="status">
          <option value=""></option>
          <option value="0">Por hacer</option>
          <option value="1">En proceso</option>
          <option value="2">Hecha</option>
          <option value="3">Bloqueada</option>
        </select>
      </div>
      <div class="form-group">
        <label for="deadline">Fecha de fin</label>
        <input type="date" id="deadline" name="deadline" />
      </div>

      <button type="submit" @click=${this.createTask}>Crear tarea</button>
      <button type="button" class="cancel-btn" @click=${this.cancelCreateTask}>
        Cancelar
      </button>
    </form>`;
  }

  createTask(e: Event): void {
    e.preventDefault();

    const errors = this.validateForm();
    if (!errors) {
      const event = new CustomEvent("new-task", {
        detail: {
          completed: 1,
          title: this.taskTitle.value,
          description: this.taskDescription.value,
          deadline: this.taskDeadLine.value,
          creation_date: new Date(),
        },
      });

      this.taskTitle.value = "";
      this.taskDescription.value = "";
      this.taskDeadLine.value = "";
      this.dispatchEvent(event);
    }
  }

  cancelCreateTask(e: Event): void {
    e.preventDefault();
    const event = new CustomEvent("cancel-create-task");
    this.errors = [];
    this.dispatchEvent(event);
  }

  validateForm(): boolean {
    this.errors = [];
    const title = this.taskTitle.value;
    const description = this.taskDescription.value;
    const deadline = this.taskDeadLine.value;

    if (!title) {
      this.errors.push("El título es obligatorio.");
    }
    if (!description) {
      this.errors.push("La descripción es obligatoria.");
    }
    if (!deadline) {
      this.errors.push("La fecha de fin es obligatoria.");
    }

    return this.errors.length > 0;
  }
}
