import { css } from "lit";

export const styles = [
  css`
    :host {
      width: 100%;
    }
    .todo-list-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      color: white;
    }
    .todo-title {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 20px;
    }
    h1 {
      font-size: 50px;
      font-weight: 100;
      margin: 0px;
    }
    .tasks {
      width: 80%;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-content: center;
      margin-top: 50px;
    }
    .tasks ul {
      width: 100%;
      margin: 0px;
      padding: 0px;
    }
    .tasks ul li {
      list-style: none;
      margin-bottom: 10px;
    }

    button {
      background-color: transparent;
      border: 1px solid white;
      padding: 20px;
      border-radius: 10px;
      color: white;
      cursor: pointer;
      z-index: 100;
      display: block;
      height: fit-content;
    }
    button:hover {
      background-color: white;
      color: black;
    }
    .new-todo-form {
      width: 100%;
    }

    .hidden {
      visibility: hidden;
      opacity: 0;
      max-height: 0px;
      transition: all 0.5s ease;
    }

    .visible {
      visibility: visible;
      padding: 20px;
      opacity: 1;
      max-height: fit-content;
      transition: all 0.5s ease;
    }
    .empty-tasks {
      font-size: 30px;
      margin-top: 30px;
    }
    .clean-btn {
      background-color: #bb2124;
      align-self: flex-end;
      margin-top: 20px;
    }
  `,
];
