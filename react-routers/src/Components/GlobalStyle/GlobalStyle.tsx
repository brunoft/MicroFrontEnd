import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto', sans-serif;
        src: url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap");
    }

   

    @keyframes loading {
        0% {
          left: -70%;
        }
        50% {
          left: 100%;
        }
        100% {
          left: -70%;
        }
      }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-rendering: geometricPrecision;
    }

    #root{
        max-width: 100%;
        margin: 0 auto;
        & > div {
            width: 100vw;
           
        }
        font-size: 60%;
        --color-black-primary: #101010;
        --color-blue-primary: #0090FF;
        --color-white-primary: #FFFFFF;
        --color-light-gray-primary: #F5F6F7;
        --color-gray-100: #555555;
        --color-gray-200: #616467;
        --color-gray-300: #626568;
        --color-gray-400: #BABDBF;
        --color-gray-500: #DFE1E2;
        --color-gray-600: #F5F6F7;
        --color-blue-600: #E6F5FE;
        --color-green-600: #F3FCE4;
        --color-green-200: #6CB92F;
        --color-green-100: #569522;
        --color-yellow-600: #FFF9DD;
        --color-yellow-200: #FFB82E;
        --color-red-100: #D02931;
        --color-red-500: #FFC9CA;
        --color-red-200: #F83D44;
        --color-red-500: #FFC9CA;
        --color-red-600: #FFF5F5;
        --color-orange-100: #D66700;
        --color-orange-300: #FF923D;
    }

    h1, h2, h3, h4, h5 , h6 {
        font-weight: normal;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    p {
        margin-block-start: 0;
        margin-block-end: 0;
    }

    div,
    body,
    span {
        display: flex;
    }

    body {
        margin: 0;
        padding: 0;
        background: #F6F6F6;
        font-family: 'Roboto', sans-serif;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
    }
    
    input{
        font-family: 'Roboto', sans-serif;
        line-height: 24px;
    }
    button{
        cursor: pointer;
    }
`

const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`

const customHeightMediaQuery = (minHeight: number) => `@media (height: ${minHeight}px)`

export const media = {
  bigDesktop: customMediaQuery(2560),
  desktop: customMediaQuery(1920),
  smallDesktop: customMediaQuery(1600),
  notebook: customMediaQuery(1440),
  smallNotebook: customMediaQuery(1366),
  tablet: customMediaQuery(1024),
  smallTablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
  iPhoneX: customHeightMediaQuery(812),
  smallMobile: customMediaQuery(365),
  miniMobile: customMediaQuery(320),
}

export const scale = {
  125: `@media (min-resolution: 120dpi)`,
  150: `@media (min-resolution: 144dpi)`,
}

export default GlobalStyle
