import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

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
