import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Enchanted Land';
        src: url('src/assets/fonts/enchanted_land-webfont.woff2') format('woff2'),
            url('src/assets/fonts/enchanted_land-webfont.woff') format('woff');
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
        overflow: hidden;
    }

    body {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
        margin: 0;
    }

    path {
        color: white;
    }
`;

export const BaseInput = css`
  background-color: transparent;
  border: 2px solid #1d504c;
  border-radius: 4px;
  padding: 16px;
  font-size: 14px;
  font-weight: 800;
  z-index: 100;
  cursor: pointer;

  &:focus,
  &:active,
  &:not(:placeholder-shown) {
    + label {
      font-size: 12px;
      background-color: #fffeeb;
      border: 2px solid #fffeeb;
      top: -10px;
      left: 23px;
      margin: 0;
      transform: none;
      z-index: 110;
    }

    cursor: text;
  }
`;

export const BaseLabel = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 16px;
  transition: top 200ms ease-in-out, font-size 200ms ease-in-out;
  z-index: 90;
`;

export const BaseInputWrapper = css`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;
