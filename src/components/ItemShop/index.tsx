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
}

export function ItemShop(props: ItemShopProps) {
  const [quantity, setQuantity] = useState(1)
  const [quantityItems, setQuantityItems] = useState(0)

  const tagEspecial = props.tags.map((tag, index) => (
    <p key={index} className="tag">
      {tag}
    </p>
  ))

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

  function totalItemsPurchased() {
    setQuantityItems((quantityItems) => {
      return (quantityItems += 1)
    })
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
          <button onClick={handleDecCoffee}>-</button>
          <p>{quantity}</p>
          <button onClick={handleAddCoffee}>+</button>
        </div>
        <div>
          <button className="CarIcon" onClick={totalItemsPurchased}>
            <ShoppingCart size={24} color="#F3F2F2" />
          </button>
        </div>
      </div>
    </MainItem>
  )
}
