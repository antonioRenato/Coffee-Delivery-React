import coffeeLogo from '../../assets/CoffeLogo.svg'
import { CoffeeLogo, SummaryBackground, SummaryText } from './styles'

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
          <div>
            <p>Compra simples e segura</p>
            <p>Embalagem mantém o café intacto</p>
            <p>Entrega rápida e rastreada</p>
            <p>O café chega fresquinho até você</p>
          </div>
        </SummaryText>
        <CoffeeLogo>
          <img src={coffeeLogo} alt="" />
        </CoffeeLogo>
      </SummaryBackground>
    </>
  )
}
