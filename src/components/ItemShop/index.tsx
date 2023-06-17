import { ShoppingCart } from 'phosphor-react'
import { MainItem } from './styles'
import { useState } from 'react'

interface ItemShopProps {
  image: string
  tags: string[]
  title: string
  text: string
  price: string
  quantity: number
  onItemPurchased: () => void
}

export function ItemShop(props: ItemShopProps) {
  const [quantity, setQuantity] = useState(0)

  const tagEspecial = props.tags.map((tag, index) => (
    <p key={index} className="tag">
      {tag}
    </p>
  ))

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

  function handlePurchase() {
    props.onItemPurchased()

    setQuantity(0)
  }

  return (
    <MainItem>
      <img src={props.image} alt="" />
      <div className="tagContainer"> {tagEspecial}</div>
      <span>{props.title}</span>
      <p>{props.text}</p>

      <div className="price">
        <span>R$ {props.price}</span>
        <div className="buttonsQuantity">
          <button onClick={handleDecCoffee} disabled={isQuantityZero()}>
            -
          </button>
          <p>{quantity}</p>
          <button onClick={handleAddCoffee}>+</button>
        </div>
        <div>
          <button
            className="CarIcon"
            onClick={handlePurchase}
            disabled={isQuantityZero()}
          >
            <ShoppingCart size={24} color="#F3F2F2" />
          </button>
        </div>
      </div>
    </MainItem>
  )
}
