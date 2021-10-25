import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task, TaskStatus } from "../../interfaces/todo-item.interface";
import { styles } from "./styles";

@customElement("todo-item")
export class TodoItem extends LitElement {
  static styles = styles;

  @property({ type: Boolean })
  showAllInfo = false;

  @property({ type: Object })
  item?: Task;

  render(): TemplateResult {
    let status;

    switch (this.item?.status) {
      case TaskStatus.TODO:
        status = html`🕛`;
        break;
      case TaskStatus.DOING:
        status = html`🕘`;
        break;
      case TaskStatus.DONE:
        status = html`✅`;
        break;
      case TaskStatus.BLOCKED:
        status = html`🔒`;
        break;
    }

    const deadLineFormatted = this.item?.deadline.split("T")[0];
    const creationDateFormatted = this.item?.creation_date.split("T")[0];

    const completeTemplate = html`<div class="task">
      <button
        @click=${this.toggleShowInfo}
        class=${this.showAllInfo ? "active" : ""}
      >
        <span>${this.item?.title}</span><span>${status}</span>
      </button>
      <div class="${this.showAllInfo ? "visible" : "hidden"}">
        <ul>
          <li>
            <div class="form-group">
              <label for="status">Estado</label>
              <select
                id="status"
                name="status"
                .value=${this.item?.status}
                @change=${this.statusChanged}
              >
                <option value="0">Por hacer</option>
                <option value="1">En proceso</option>
                <option value="2">Hecha</option>
                <option value="3">Bloqueada</option>
              </select>
            </div>
          </li>
          <li><span>Descripción:</span> ${this.item?.description}</li>
          <li><span>Fecha de fin:</span> ${deadLineFormatted}</li>
          <li><span>Fecha de creación:</span> ${creationDateFormatted}</li>
        </ul>
      </div>
    </div>`;
    return completeTemplate;
  }

  toggleShowInfo(): void {
    this.showAllInfo = !this.showAllInfo;
  }

  statusChanged(e: Event): void {
    const event = new CustomEvent("new-status", {
      detail: {
        item: this.item,
        newStatus: Number((<HTMLInputElement>e.target).value),
      },
    });

    this.dispatchEvent(event);
  }
}
