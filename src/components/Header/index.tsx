import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logo.svg'
import city from '../../assets/city.svg'
import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  totalItemsPurchased?: number
}

export function Header(props: HeaderProps) {
  return (
    <HeaderContainer>
      <Link to={`/`} title="Home">
        <img src={logoIgnite} alt="" />
      </Link>
      <nav>
        <img src={city} alt="" />

        <Link
          to={`/checkout?totalItemsPurchased=${props.totalItemsPurchased}`}
          title="Checkout"
        >
          <button>
            <ShoppingCart color="#C47F17" size={20} />
          </button>
        </Link>
        <div className="numberOfShops">
          <span>{props.totalItemsPurchased}</span>
        </div>
      </nav>
    </HeaderContainer>
  )
}
