import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  ButtonLayout,
  ButtonOfPurshaced,
  Container,
  Endereco,
  FormEndereco,
  Payment,
  PaymentText,
  SelectedCoffee,
  SelectedCoffeeContainer,
  SpanEndereco,
  TextOfPurchasedItems,
} from './styles'

export function CompleteCheckout() {
  return (
    <Container>
      <div>
        <h3>Complete seu pedido</h3>
        <Endereco>
          <div>
            <div className="imageMap">
              <MapPinLine color="#DBAC2C" size={28} />
            </div>
            <SpanEndereco>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </SpanEndereco>
          </div>

          <FormEndereco action="">
            <label htmlFor="CEP">
              <input type="text" placeholder="  CEP" size={30} />
            </label>
            <label htmlFor="Rua">
              <input type="text" placeholder="  Rua" size={85} />
            </label>
            <label htmlFor="Numero">
              <input type="number" placeholder="  Número" />
            </label>
            <label htmlFor="Complemento">
              <input type="text" placeholder="  Complemento" size={60} />
            </label>
            <label htmlFor="Bairro">
              <input type="text" placeholder="  Bairro" />
            </label>
            <label htmlFor="Cidade">
              <input type="text" placeholder="  Cidade" size={35} />
            </label>
            <label htmlFor="UF">
              <input type="text" placeholder="  UF" maxLength={2} />
            </label>
          </FormEndereco>
        </Endereco>

        <Payment>
          <PaymentText>
            <CurrencyDollar size={26} color="#8047F8" />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentText>
          <ButtonLayout>
            <button>
              <CreditCard size={20} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </button>
            <button>
              <Bank size={20} color="#8047F8" />
              CARTÃO DE DÉBITO
            </button>
            <button>
              <Money size={20} color="#8047F8" />
              DINHEIRO
            </button>
          </ButtonLayout>
        </Payment>
      </div>
      <SelectedCoffee>
        <h3>Cafés selecionados</h3>
        <SelectedCoffeeContainer>
          <div></div>
          <TextOfPurchasedItems>
            <div>
              <p>Total de itens</p>
              <p>Entrega</p>
              <span>Total</span>
            </div>
            <div>
              <p>R$ 29,70</p>
              <p>R$ 3,50</p>
              <span>R$ 33,20</span>
            </div>
          </TextOfPurchasedItems>
          <ButtonOfPurshaced>
            <button>Confirmar Pedido</button>
          </ButtonOfPurshaced>
        </SelectedCoffeeContainer>
      </SelectedCoffee>
    </Container>
  )
}
