import { VFC } from 'react'
import { GlobalCartAmountType } from '../../store/GlobalCart'

const CartItems: VFC<GlobalCartAmountType> = ({ cartItems, totalAmount }) => {
  const total = new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'USD',
  }).format(totalAmount)
  return (
    <div>
      <table className="table table-compact table-zebra w-full">
        <thead>
          <tr>
            <th>Items</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className="text-right">{item.qty}</td>
              <td className="text-right font-mono">
                {new Intl.NumberFormat('ja-JP', {
                  style: 'currency',
                  currency: 'USD',
                }).format(item.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-4 w-full stats shadow">
        <div className="stat">
          <div className="stat-title">Total Amount</div>
          <div className="stat-value text-accent text-right text-3xl">
            {total}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
