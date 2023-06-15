import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logo.svg'
import city from '../../assets/city.svg'
import { ShoppingCart } from 'phosphor-react'

interface HeaderProps {
  totalItemsPurchased: number
}

export function Header(props: HeaderProps) {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <nav>
        <img src={city} alt="" />
        <div>
          <ShoppingCart color="#C47F17" size={20} />
        </div>
        <div className="numberOfShops">
          <span>{props.totalItemsPurchased}</span>
        </div>
      </nav>
    </HeaderContainer>
  )
}
