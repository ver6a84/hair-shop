import { Link } from "react-router-dom";
import './HairCare.css'

export default function HairCare() {
	return (
		<section className="hair-care container">
			<div className="hair-care-img">
				<img
        src={'./hair_care.webp'}
        srcSet={'./hair-care.webp 1200w, ./hair-care_mob.webp 400w'}
        sizes='(max-width: 400px) 100px, 400px'
        alt="Care"
        width={1200}
        height={600}
				loading='lazy'
      />
			<h3>Як доглядати за перуками та робити укладку</h3>
			<Link className="hair-care-link" to={`/care`}>Детальніше</Link>
			</div>
		</section>
	)
}