import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {  
  --color-bg-main: #FAD53D;
  --color-bg-sub: #E9C73E;
  --color-text-main: #2e383c;
  --color-text-sub: #3f3f3f;
  }


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Sarabun", sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

`;

export default GlobalStyles;
