import HeroBanner from '@components/HeroBanner'
import Products from './Products'
import '@styles/pages/pages.css'
import HairCare from '@/components/HairCare'

export default function Home() {
  return (

      <div className="homepage">
      <HeroBanner />
      <Products />
      <HairCare/>
      </div>

  )
}
