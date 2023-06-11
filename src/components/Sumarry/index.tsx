import coffeeLogo from '../../assets/CoffeLogo.svg'

import BoxIcon from '../../assets/icons/BoxIcon.svg'
import CoffeeIcon from '../../assets/icons/CoffeeIcon.svg'
import ShoppingCartIcon from '../../assets/icons/ShoppingCartIcon.svg'
import TimerIcon from '../../assets/icons/TimerIcon.svg'

import ExpressoTrad from '../../assets/expresso.svg'
import ExpressoAmericano from '../../assets/americano.svg'
import ExpressoCremoso from '../../assets/Expresso_Cremoso.svg'
import CafeGelado from '../../assets/Cafe_Gelado.svg'
import CafeLeite from '../../assets/cafeLeite.svg'
import CafeLatte from '../../assets/latte.svg'
import Cappucino from '../../assets/cappucino.svg'
import CafeMacchiato from '../../assets/macchiato.svg'
import CafeMocaccino from '../../assets/mochaccino.svg'
import CafeChocolateQuente from '../../assets/chocolateQuente.svg'
import CafeCubano from '../../assets/cubano.svg'
import CafeHaviano from '../../assets/havaiano.svg'
import CafeArabe from '../../assets/arabe.svg'
import CafeIrlandes from '../../assets/irlandes.svg'

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
            price={'7,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoAmericano}
            tags={['TRADICIONAL']}
            title={'Expresso Americano'}
            text={'Expresso diluído, menos intenso que o tradicional'}
            price={'8,90'}
            quantity={1}
          />
          <ItemShop
            image={ExpressoCremoso}
            tags={['TRADICIONAL']}
            title={'Expresso Cremoso'}
            text={'Café expresso tradicional com espuma cremosa'}
            price={'8,90'}
            quantity={1}
          />
          <ItemShop
            image={CafeGelado}
            tags={['TRADICIONAL', 'GELADO']}
            title={'Expresso Gelado'}
            text={'Bebida preparada com café expresso e cubos de gelo'}
            price={'8,90'}
            quantity={1}
          />
          <ItemShop
            image={CafeLeite}
            tags={['TRADICIONAL', 'COM LEITE']}
            title={'Café com Leite'}
            text={'Meio a meio de expresso tradicional com leite vaporizado'}
            price={'7,90'}
            quantity={1}
          />
          <ItemShop
            image={CafeLatte}
            tags={['TRADICIONAL', 'COM LEITE']}
            title={'Latte'}
            text={
              'Uma dose de café expresso com o dobro de leite e espuma cremosa'
            }
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={Cappucino}
            tags={['TRADICIONAL', 'COM LEITE']}
            title={'Cappucino'}
            text={
              'Bebida com canela feita de doses iguais de café, leite e espuma'
            }
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={CafeMacchiato}
            tags={['TRADICIONAL', 'COM LEITE']}
            title={'Macchiato'}
            text={
              'Café expresso misturado com um pouco de leite quente e espuma'
            }
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={CafeMocaccino}
            tags={['TRADICIONAL', 'COM LEITE']}
            title={'Mocaccino'}
            text={'Café expresso com calda de chocolate, pouco leite e espuma'}
            price={'9,90'}
            quantity={1}
          />
          <ItemShop
            image={CafeChocolateQuente}
            tags={['ESPECIAL', 'COM LEITE']}
            title={'Chocolate Quente'}
            text={
              'Bebida feita com chocolate dissolvido no leite quente e café'
            }
            price={'8,90'}
            quantity={1}
          />
          <ItemShop
            image={CafeCubano}
            tags={['ESPECIAL', 'ALCOÓLICO', 'GELADO']}
            title={'Cubano'}
            text={
              'Drink gelado de café expresso com rum, creme de leite e hortelã'
            }
            price={'10,90'}
            quantity={1}
          />
          <ItemShop
            image={CafeHaviano}
            tags={['ESPECIAL']}
            title={'Havaiano'}
            text={'Bebida adocicada preparada com café e leite de coco'}
            price={'10,90'}
            quantity={1}
          />
          <ItemShop
            image={CafeArabe}
            tags={['ESPECIAL']}
            title={'Árabe'}
            text={'Bebida preparada com grãos de café árabe e especiarias'}
            price={'10,90'}
            quantity={1}
          />
          <ItemShop
            image={CafeIrlandes}
            tags={['ESPECIAL', 'ALCOÓLICO']}
            title={'Irlandês'}
            text={'Bebida a base de café, uísque irlandês, açúcar e chantilly'}
            price={'12,90'}
            quantity={1}
          />
        </div>
      </SummaryMain>
    </>
  )
}
