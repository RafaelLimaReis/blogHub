import styled from 'styled-components'
import { mixins } from '../../styles/mixins'
import { Link } from 'react-router-dom'

export const ContainerContent = styled.div`
    ${mixins.limitContainer}

    h3 {
        ${mixins.fonts.titleS}
        color: ${(props) => props.theme['base-subtitle']};
    }

    small {
        ${mixins.fonts.textS}
        color: ${(props) => props.theme['base-span']};
    }

    input {
        ${mixins.fonts.textM}
        color: ${(props) => props.theme['base-text']};

        margin: 0.75rem 0 3rem 0;
        width: 100%;
        padding: 0.75rem 1rem;
        border-radius: 6px;

        background-color: ${(props) => props.theme['base-input']};
        border: 1px solid ${(props) => props.theme['base-border']};

        &::-webkit-input-placeholder {
            ${mixins.fonts.textM}
            color: ${(props) => props.theme['base-label']};
        }

        &:focus {
            border-color: ${(props) => props.theme.blue};
        }
    }
`

export const ContainerPosts = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;

    margin-bottom: 3rem;
`

export const Post = styled(Link)`
    background: ${(props) => props.theme['base-post']};
    max-width: calc((54.375rem / 2) - 1rem);
    min-height: 16.25rem;
    width: 100%;

    padding: 2rem;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;

    > div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1.25rem;

        h4 {
            ${mixins.fonts.titleM}
            color: ${(props) => props.theme['base-title']};
            flex-grow: 1;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            text-decoration: none;
        }

        time {
            ${mixins.fonts.textS}
            color: ${(props) => props.theme['base-span']};
        }
    }

    span {
        ${mixins.fonts.textM}

        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        color: ${(props) => props.theme['base-text']};
    }
`
