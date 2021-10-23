import "../todo-item/todo-item.ts";

import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import { styles } from "./styles";

@customElement("new-todo-form")
export class NewTodoForm extends LitElement {
  static styles = styles;

  render(): TemplateResult {
    return html`<form>
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
    </form>`;
  }

  createTask(e: Event): void {
    e.preventDefault();
    const event = new CustomEvent("new-task", {
      detail: {
        completed: 1,
        title: "hola",
        description: "Asdf",
        deadline: new Date(),
        creation_date: new Date(),
      },
    });
    this.dispatchEvent(event);
  }
}
