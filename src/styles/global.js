import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Turret+Road&display=swap');

@font-face {
    font-family: Prime Light;
    src: url('../../assets/fonts/prime/Prime-Light.otf');
}

@font-face {
    font-family: Prime;
    src: url('../../assets/fonts/prime/Prime-Regular.otf');
}

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
 }

html, body, #root{
    height: 100%;
}

body{
    font: 14px  prime sans-serif;
    background: #f7f7f7;
    -webkit-font-smoothing: antialiased !important;
    
}

ul {
    list-style: none;
}

a, a:link, a:visited, a:hover, a:active {
    text-decoration: none;
}

`;