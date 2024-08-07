import styled, { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

interface TypeAlignCardProps {
    type: 'start' | 'center'
}

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
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        ${mixins.fonts.textM}
    }
`

export const CardInfo = styled.div<TypeAlignCardProps>`
    ${mixins.limitContainer}

    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.type === 'center' ? 'center' : 'flex-start'};;
    gap: 2rem;
    background-color: ${(props) => props.theme['base-profile']};
    border-radius: 10px;
    padding: 2rem 2.5rem;
    margin-top: -5rem;
    box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

    > img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
    }

    h3 {
        ${mixins.fonts.titleL}
        color: ${(props) => props.theme['base-title']};
    }

    a {
        ${mixins.fonts.link}
        color: ${(props) => props.theme.blue};
        text-transform: uppercase;

        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    p {
        ${mixins.fonts.textM}
        color: ${(props) => props.theme['base-text']};
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        margin-bottom: 1.5rem;
        height: 3.25rem;
    }
`

export const CardInfoGithub = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;

    span {
        ${mixins.fonts.textM}
        color: ${(props) => props.theme['base-subtitle']};

        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    @media (max-width: 754px) {
        justify-content: center;
    }
`