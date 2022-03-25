import { atom, selector } from 'recoil'
import { groupBy } from '../utils/functions/groupBy'

export type GlobalCartType = {
  id: number
  title: string
  unitPrice: number
}

export type GlobalCartItems = {
  id: number
  title: string
  qty: number
  amount: number
}
export type GlobalCartAmountType = {
  cartItems: GlobalCartItems[],
  totalAmount: number
}

export const GlobalCart = atom<GlobalCartType[]>({
  key: 'GlobalCart',
  default: []
})

export const GlobalCartAmount = selector({
  key: 'GlobalCartAmount',
  get: ({ get }) => {
    const items = get(GlobalCart)
    const result = groupBy(items, item => item.id)
      .map(([id, items]) => ({
        id: id,
        title: items.find((item) => item.id === id)?.title || '',
        qty: items.reduce((sum) => sum + 1, 0),
        amount: items.reduce((sum, item) => sum + item.unitPrice, 0)
      }))
    const total = result.reduce((sum, item) => sum + item.amount, 0)
    return {
      cartItems: result,
      totalAmount: total,
    }
  }
})