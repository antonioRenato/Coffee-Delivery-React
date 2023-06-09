import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logo.svg'
import city from '../../assets/city.svg'
import { ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <nav>
        <img src={city} alt="" />
        <div>
          <ShoppingCart color="#C47F17" size={20} />
        </div>
      </nav>
    </HeaderContainer>
  )
}
