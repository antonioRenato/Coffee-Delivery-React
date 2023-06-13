import { ShoppingCart } from 'phosphor-react'
import { MainItem } from './styles'

interface ItemShopProps {
  image: string
  tags: string[]
  title: string
  text: string
  price: string
  quantity: number
}

export function ItemShop(props: ItemShopProps) {
  const tagEspecial = props.tags.map((tag, index) => (
    <p key={index} className="tag">
      {tag}
    </p>
  ))

  return (
    <MainItem>
      <img src={props.image} alt="" />
      <div className="tagContainer"> {tagEspecial}</div>
      <span>{props.title}</span>
      <p>{props.text}</p>

      <div className="price">
        <span>R$ {props.price}</span>
        <div className="buttonsQuantity">
          <button>-</button>
          <p>{props.quantity}</p>
          <button>+</button>
        </div>
        <div>
          <button className="CarIcon">
            <ShoppingCart size={24} color="#F3F2F2" />
          </button>
        </div>
      </div>
    </MainItem>
  )
}
