import { VFC } from 'react'
import ShopItemCard from '../components/Cards/ShopItemCard'
import Head from '../components/Head'
import { ShopItems } from '../utils/datas/ShopItems'

const HomePage: VFC = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-5">
      <Head title="Home/Shopping Items" />
      {ShopItems.map((d) => (
        <div key={d.id}>
          <ShopItemCard
            id={d.id}
            title={d.title}
            description={d.description}
            imageUrl={d.imageUrl}
            unitPrice={d.unitPrice}
          />
        </div>
      ))}
    </div>
  )
}

export default HomePage
