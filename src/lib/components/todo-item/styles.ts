import { css } from "lit";

export const styles = [
  css`
    ul {
      margin: 0px;
      padding: 0px;
    }
    ul li {
      list-style: none;
      padding: 10px;
    }
    ul li span {
      font-weight: bold;
    }
    ul li:last-child {
      border: none;
      float: right;
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
      display: flex;
      justify-content: space-between;
      padding-left: 30px;
      padding-right: 30px;
      font-size: 20px;
      align-items: center;
    }
    button:hover {
      background-color: white;
      color: black;
    }
    .active {
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
    .form-group {
      display: flex;
      flex-flow: column wrap;
    }
    label {
      margin-bottom: 5px;
    }
    select {
      border-radius: 5px;
      border: 0px;
      padding: 10px;
    }
  `,
];
