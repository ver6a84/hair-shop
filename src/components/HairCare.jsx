import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import './HairCare.css'

export default function HairCare() {
	 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	
		useEffect(() => {
			const handleResize = () => setIsMobile(window.innerWidth < 768);
			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}, []);
	
		const imageSrc = isMobile ? './hair-care.webp' : './hair-care_desktop.webp';
	return (
		<section className="hair-care container">
			<div className="hair-care-img">
				<img src={imageSrc}/>
			<h2>Як доглядати за перуками та робити укладку</h2>
			<Link className="hair-care-link" to={`/care`}>Читати</Link>
			</div>
		</section>
	)
}