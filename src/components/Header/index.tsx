import { HeaderContainer } from './styles'

import logo from '../../assets/images/logo.png'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="logo do bloghub" />
        </HeaderContainer>
    )
}
