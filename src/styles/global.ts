import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background-color: ${({ theme }) => theme['base-background']};
        color: ${({ theme }) => theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        ${mixins.fonts.textM}
    }
`
