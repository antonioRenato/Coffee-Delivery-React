import { useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { CompleteCheckout } from '../components/Endereco'

export function Checkout() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const totalItemsPurchased = searchParams.get('totalItemsPurchased')

  const parsedTotalItemsPurchased =
    totalItemsPurchased !== null ? parseInt(totalItemsPurchased) : 0

  return (
    <>
      <Header totalItemsPurchased={parsedTotalItemsPurchased} />
      <div>
        <CompleteCheckout />
      </div>
    </>
  )
}
