import HeaderImage from '../../assets/header.svg'
import { HeaderContainer } from './style'

export function Header() {
    return (
        <HeaderContainer>
            <img src={HeaderImage} alt="Logo da organo e ao lado foto de pessoas felizes colocando a mão uma em cima da outra" />
        </HeaderContainer>
    )
}