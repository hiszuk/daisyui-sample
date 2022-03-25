export type ShopItemProps = {
  id: number
  title?: string
  description?: string
  imageUrl?: string
  unitPrice: number
}
export type ShopItemsProps = ShopItemProps[]

export const ShopItems = [
  {
    id: 1,
    title: 'Shoes',
    description: 'If a dog chews shoes whose shoes does he choose?',
    imageUrl: 'https://api.lorem.space/image/shoes?w=450&h=250',
    unitPrice: 100,
  },
  {
    id: 2,
    title: 'Watch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imageUrl: 'https://api.lorem.space/image/watch?w=450&h=250',
    unitPrice: 300,
  },
  {
    id: 3,
    title: 'Fashion',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
    imageUrl: 'https://api.lorem.space/image/fashion?w=450&h=250',
    unitPrice: 200,
  },
  {
    id: 4,
    title: 'Pizza',
    description: 'Est ullamcorper eget nulla facilisi.',
    imageUrl: 'https://api.lorem.space/image/pizza?w=450&h=250',
    unitPrice: 20,
  },
  {
    id: 5,
    title: 'Burger',
    description: 'Gravida quis blandit turpis cursus in hac.',
    imageUrl: 'https://api.lorem.space/image/burger?w=450&h=250',
    unitPrice: 15,
  },
  {
    id: 6,
    title: 'Drink',
    description: 'Arcu cursus euismod quis viverra.',
    imageUrl: 'https://api.lorem.space/image/drink?w=450&h=250',
    unitPrice: 10,
  },
]
