import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Enchanted Land';
        src: url('assets/fonts/enchanted_land-webfont.woff2') format('woff2'),
            url('assets/fonts/enchanted_land-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        color: #1d504c;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
}`;

export default GlobalStyle;
