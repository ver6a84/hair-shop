import HeroBanner from '@components/HeroBanner'
import Products from './Products'
import '@styles/pages/pages.css'

export default function Home() {
  return (

      <div className="homepage">
      <HeroBanner />
      <Products />
      </div>

  )
}
