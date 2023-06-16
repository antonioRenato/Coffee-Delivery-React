import { useLocation } from 'react-router-dom'
import { Header } from '../components/Header'

export function Checkout() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const totalItemsPurchased = searchParams.get('totalItemsPurchased')

  return (
    <>
      <Header />
      <div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}
