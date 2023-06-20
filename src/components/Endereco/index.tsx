import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Container, Endereco, FormEndereco, SpanEndereco } from './styles'

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

        <div>
          <div>
            <CurrencyDollar />
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
          <div>
            <button>
              <CreditCard />
              Cartão de Crédito
            </button>
            <button>
              <Bank />
              Cartão de débito
            </button>
            <button>
              <Money />
              Dinheiro
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3>Cafés selecionados</h3>
      </div>
    </Container>
  )
}
