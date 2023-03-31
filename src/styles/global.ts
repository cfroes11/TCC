import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #F8DFF;
        font-family: 'Poppins', sans-serif;
    }

    .link {
        text-decoration: none;
    }
`

export default globalStyle;