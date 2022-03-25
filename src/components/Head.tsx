import { VFC } from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  title?: string
}

const Head: VFC<Props> = ({ title }) => {
  const site = 'vite x react x daisyUI sample'
  return (
    <Helmet>
      <title>{`${title}::${site}`}</title>
      <meta name="description" content={`${site}のサイトです 👉 ${title}`} />
    </Helmet>
  )
}

export default Head
