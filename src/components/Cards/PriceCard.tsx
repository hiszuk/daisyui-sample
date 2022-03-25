import { VFC } from 'react'
import { useRecoilState } from 'recoil'
import { GlobalCart } from '../../store/GlobalCart'

type Props = {
  title: string
  description: string
  imageUrl: string
  price: number
  choosen?: boolean
}

const PriceCard: VFC<Props> = ({
  title = 'NO TITLE',
  description = 'Lorem ipsam',
  imageUrl = 'https://fakeimg.pl/400x225/?text=NO%20IMAGE',
  price = 0,
  choosen,
}) => {
  const border = choosen ? 'border-2 border-accent shadow-xl' : 'shadow-md'
  return (
    <div className="indicator">
      {choosen && <span className="indicator-item indicator-center badge badge-accent text-primary-content">Most Popular</span>}
      <div className={`card card-compact bg-base-100 ${border} transition duration-300`}>
        <figure className="h-48">
          <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
        </figure>
        <div className="card-body mx-5 my-2">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">${price}</div>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">
              Buy {title}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceCard