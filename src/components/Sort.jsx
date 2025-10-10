import './Filters.css'
import Icon from './icon'
import { useState } from 'react'

export default function Sort( {setSortOrder} ){
	const [isSortOpen, setIsSortOpen] = useState(false)
	const toggleMenuSort = () => setIsSortOpen(!isSortOpen)
	
return(
			<div className="sort">
				<div className='sort-btn-wrapper' onClick={toggleMenuSort}>
				<Icon name="filter"/>
				<div className='sort-btn'>Сортувати</div>
			</div>
			<div className={`sort-menu ${isSortOpen ? 'active' : ''}`}>
					<ul>
						<li onClick={() => {
						setSortOrder('asc')
						setIsSortOpen(false)
						}
						}>За зростанням ціни</li>
						<li onClick={() => {
							setSortOrder('desc')
							setIsSortOpen(false)
						}
						}>За спаданням ціни</li>
					</ul>
				</div>
		</div>
	)
}