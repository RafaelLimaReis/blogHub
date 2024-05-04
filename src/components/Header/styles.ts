import styled from 'styled-components'
import backgroundImage from '../../assets/images/fundo.png'

export const HeaderContainer = styled.header`
    background: url(${backgroundImage});
    height: 18.5rem;
    background-size: 100% 100%;
    background-position: center;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
        margin-top: 4rem;
    }
`
