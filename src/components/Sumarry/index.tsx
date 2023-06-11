import coffeeLogo from '../../assets/CoffeLogo.svg'

import BoxIcon from '../../assets/icons/BoxIcon.svg'
import CoffeeIcon from '../../assets/icons/CoffeeIcon.svg'
import ShoppingCartIcon from '../../assets/icons/ShoppingCartIcon.svg'
import TimerIcon from '../../assets/icons/TimerIcon.svg'

import ExpressoTrad from '../../assets/expresso.svg'

import {
  CoffeeLogo,
  SummaryBackground,
  SummaryIcons,
  SummaryMain,
  SummaryText,
} from './styles'
import { ItemShop } from '../ItemShop'

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
          <img className="imgAmpliada" src={coffeeLogo} alt="" />
        </CoffeeLogo>
      </SummaryBackground>
      <SummaryMain>
        <span>Nossos cafés</span>
        <div className="itemsCoffee">
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoTrad}
            tags={['TRADICIONAL']}
            title={'Expresso Tradicional'}
            text={'O tradicional café feito com água quente e grãos moídos'}
            price={'9,90'}
            quantity={1}
          />
        </div>
      </SummaryMain>
    </>
  )
}
