import { VFC } from 'react'
import Head from '../components/Head'
import { Feature } from '../components/Info/Feature'
import { Pricing } from '../components/Info/Pricing'

const InfoPage: VFC = () => {
  return (
    <div>
      <Head title="Info" />
      <Pricing />
    </div>
  )
}

export default InfoPage
