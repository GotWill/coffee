import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

    body{
        max-width: 1140px;
        margin: 0 auto;
        margin-top: 2rem;
        font-family: 'Roboto', sans-serif;
    }
`