import { VFC } from 'react'
import { useRecoilState } from 'recoil'
import { GlobalCart } from '../../store/GlobalCart'
import { ShopItemProps } from '../../utils/datas/ShopItems'

const ShopItemCard: VFC<ShopItemProps> = ({
  id,
  title = 'NO TITLE',
  description = 'Lorem ipsam',
  imageUrl = 'https://fakeimg.pl/400x225/?text=NO%20IMAGE',
  unitPrice = 0,
}) => {
  const [cart, setCart] = useRecoilState(GlobalCart)

  const handleClickBuy = (id: number, title: string, unitPrice: number) => {
    const newCart = [...cart]
    newCart.push({
      id,
      title,
      unitPrice,
    })
    setCart(newCart)
  }

  return (
    <div className="card card-compact bg-base-100 shadow-xl md:h-96">
      <figure><img src={imageUrl} alt={title} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between items-center">
          <div className="ml-5 text-3xl font-bold text-accent-focus">${unitPrice}</div>
          <button
            className="btn btn-primary"
            onClick={() => handleClickBuy(id, title, unitPrice)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShopItemCard