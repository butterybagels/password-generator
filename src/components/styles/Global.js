import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-weight: bold;
  }
  
  body {
    background: rebeccapurple;
    color: #fff;
    font-family: system-ui,-apple-system,"Segoe UI","Roboto","Helvetica Neue","Noto Sans","Liberation Sans","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }
  
  button {
    color: white;
    background-color: rebeccapurple;
    margin-left: 20px;
    border-radius: 5px;
    border-width: 0;
    padding: 4px 10px;
  }

  button:hover {
    background-color: lightpink;
    border-color: lightpink;
  }
`

export default GlobalStyles