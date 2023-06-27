import { SelectedCoffeeItems } from './styles'
import { useState } from 'react'

interface CoffeePurchased {
  img: string
  name: string
  quantity: number
  price: number
}

export function ItemPurchased(props: CoffeePurchased) {
  const [quantity, setQuantity] = useState(0)

  function isQuantityZero() {
    if (quantity === 0) {
      return true
    } else {
      return false
    }
  }

  function handleAddCoffee() {
    setQuantity((quantity) => {
      return (quantity += 1)
    })
  }

  function handleDecCoffee() {
    setQuantity((quantity) => {
      return (quantity -= 1)
    })
  }

  return (
    <SelectedCoffeeItems>
      <img src={props.img} alt="" />
      <div>
        <p>{props.name}</p>
        <div className="buttonsQuantity">
          <button onClick={handleDecCoffee} disabled={isQuantityZero()}>
            -
          </button>
          <p>{quantity}</p>
          <button onClick={handleAddCoffee}>+</button>
        </div>
      </div>
      <span>R$ {props.price}</span>
    </SelectedCoffeeItems>
  )
}
