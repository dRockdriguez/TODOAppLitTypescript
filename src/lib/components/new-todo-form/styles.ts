import { css } from "lit";

export const styles = [
  css`
    form {
      display: block;
      width: 80%;
      margin: 0px auto;
    }
    .form-group {
      padding: 5px;
      display: flex;
      flex-flow: column wrap;
    }
    label {
      margin-bottom: 5px;
    }
    textarea {
      resize: none;
      border-radius: 5px;
      border: 0px;
      padding: 10px;
    }
    input,
    select {
      border-radius: 5px;
      border: 0px;
      padding: 10px;
    }
    button {
      background-color: transparent;
      border: 1px solid white;
      padding: 20px;
      border-radius: 10px;
      color: white;
      cursor: pointer;
      margin-top: 30px;
      display: block;
      height: fit-content;
      width: 100%;
    }
    button:hover {
      background-color: white;
      color: black;
    }
  `,
];
