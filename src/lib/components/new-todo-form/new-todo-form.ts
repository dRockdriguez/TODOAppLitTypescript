import "../todo-item/todo-item.ts";

import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import { styles } from "./styles";

@customElement("new-todo-form")
export class NewTodoForm extends LitElement {
  static styles = styles;

  render(): TemplateResult {
    return html` hola`;
  }
}
