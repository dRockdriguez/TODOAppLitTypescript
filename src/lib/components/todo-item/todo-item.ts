import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "../../interfaces/todo-item.interface";
import { styles } from "./styles";

@customElement("todo-item")
export class TodoItem extends LitElement {
  static styles = styles;

  @property({ type: Boolean })
  showAllInfo = false;

  @property({ type: Object })
  item?: Task;

  // Render the UI as a function of component state
  render(): TemplateResult {
    const completeTemplate = html`<div class="task">
      <button @click=${this.toggleShowInfo}>${this.item?.title}</button>
      <div class="${this.showAllInfo ? "visible" : "hidden"}">
        <ul>
          <li>${this.item?.description}</li>
          <li>${this.item?.creation_date}</li>
          <li>${this.item?.completed}</li>
          <li>${this.item?.deadline}</li>
        </ul>
      </div>
    </div>`;
    return completeTemplate;
  }

  toggleShowInfo(): void {
    this.showAllInfo = !this.showAllInfo;
  }
}
