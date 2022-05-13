import {createGlobalStyle} from 'styled-components';

import theme from './theme';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }   

    html {
        width: 100%;
    }

    body {
        background-color: ${theme.colors.screen_background};
        font-family: ${theme.fonts.segoe_ui};
    }

    body::-webkit-scrollbar {
        width: 0.75rem;
    }

    body::-webkit-scrollbar-track {
        background-color: ${theme.colors.screen_background};
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.screen_search_bar_background};
        border-radius: 20px;
        border: 3px solid ${theme.colors.screen_background};
    }

    button, a {
        cursor: pointer;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 1080px) {
        html {
            font-size: 87.5%;
        }
    }

`;
