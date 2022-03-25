import { VFC } from 'react'
import Head from '../components/Head'
import Graph from '../components/Stats/Graph'
import StatsHead from '../components/Stats/StatsHead'

const StatsPage: VFC = () => {
  return (
    <>
      <Head title="Stats" />
      <StatsHead />
      <Graph />
    </>
  )
}

export default StatsPage
