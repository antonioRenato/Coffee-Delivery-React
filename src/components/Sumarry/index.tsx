import coffeeLogo from '../../assets/CoffeLogo.svg'

import BoxIcon from '../../assets/icons/BoxIcon.svg'
import CoffeeIcon from '../../assets/icons/CoffeeIcon.svg'
import ShoppingCartIcon from '../../assets/icons/ShoppingCartIcon.svg'
import TimerIcon from '../../assets/icons/TimerIcon.svg'

import {
  CoffeeLogo,
  SummaryBackground,
  SummaryIcons,
  SummaryText,
} from './styles'

export function Summary() {
  return (
    <>
      <SummaryBackground>
        <SummaryText>
          <span>Encontre o café perfeito para qualquer hora do dia</span>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <SummaryIcons>
            <img src={ShoppingCartIcon} alt="" />
            <p>Compra simples e segura</p>
            <img src={TimerIcon} alt="" />
            <p>Embalagem mantém o café intacto</p>
            <img src={BoxIcon} alt="" />
            <p>Entrega rápida e rastreada</p>
            <img src={CoffeeIcon} alt="" />
            <p>O café chega fresquinho até você</p>
          </SummaryIcons>
        </SummaryText>
        <CoffeeLogo>
          <img src={coffeeLogo} alt="" />
        </CoffeeLogo>
      </SummaryBackground>
      <div>
        <span>Nossos cafés</span>
        <div>
          <div></div>
        </div>
      </div>
    </>
  )
}
