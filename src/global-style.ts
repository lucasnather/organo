import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        font-weight: 400;

        color: ${({theme}) => theme.text.black};
        background-color: ${({theme}) => theme.primary.white};
    }
    
`