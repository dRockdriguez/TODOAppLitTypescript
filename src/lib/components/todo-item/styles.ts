import { css } from "lit";

export const styles = [
  css`
    ul {
      margin: 0px;
      padding: 0px;
    }
    ul li {
      list-style: none;
    }
    button {
      width: 100%;
      background-color: transparent;
      border: 1px solid white;
      padding: 20px;
      border-radius: 10px;
      color: white;
      cursor: pointer;
      z-index: 100;
      display: block;
    }
    button:hover {
      background-color: white;
      color: black;
    }
    .hidden {
      opacity: 0;
      max-height: 0px;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .hidden ul {
      display: none;
    }
    .visible {
      z-index: 1;
      padding: 20px;
      opacity: 1;
      max-height: fit-content;
      transition: all 0.5s ease;
    }
  `,
];
