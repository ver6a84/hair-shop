import './Filters.css'
import Icon from './icon'
import { useState } from 'react'

export default function Filters() {
	 const [isFiltersOpen, setIsFiltersOpen] = useState(false)
	 const [isSortOpen, setIsSortOpen] = useState(false)
	 const [isMaterialOpen, setIsMaterialOpen] = useState(false)
		const [isPriceOpen, setIsPriceOpen] = useState(false)
	
  const showMenuFilters = () => {
    setIsFiltersOpen(prev => !prev)
    setIsSortOpen(false) 
  }

	const closeMenuFilters = () => setIsFiltersOpen(false) 

  const toggleMenuSort = () => {
    setIsSortOpen(prev => !prev)
    setIsFiltersOpen(false) 
  }
	
	 const toggleMaterial = () => setIsMaterialOpen(!isMaterialOpen)

 const togglePrice = () => setIsPriceOpen(!isPriceOpen)

	return (
		<div className="filters-wrapper">	
			<div  className="filters-btn" onClick={showMenuFilters}>
				<Icon name="filter"/>
				<span>Фільтри</span>
			</div>
				<div className={`filter-menu ${isFiltersOpen ? 'active' : ''}`}>
					<div className="filter-heading">
						<h1>Фільтри</h1>
						<div className="close-btn" onClick={closeMenuFilters}><Icon name="close"/></div>
					</div>
					<div className="filter-material">
						<div className="material-heading">
							<h2>Матеріал</h2>
							<div className="material-list-btn" onClick={toggleMaterial}><Icon name="arrow_down"/></div>
						</div>
						<ul className={`material-list ${isMaterialOpen ? 'active' : ''}`}>
							<li><input type="checkbox"/><span>Натуральне волосся</span></li>
							<li><input type="checkbox"/><span>Tермоволокно</span></li>
							<li><input type="checkbox"/><span>Синтетика</span></li>
						</ul>
					</div>
					<div className="filter-price">
						<div className="price-heading">
							<h2>Ціна</h2>
							<div className="price-options-btn" onClick={togglePrice}><Icon name="arrow_down"/></div>
						</div>
						<form className={`price-options ${isPriceOpen ? 'active' : ''}`}>
							<input  type="text" />
							<div></div>
							<input  type="text"/>
							<button>ОК</button>
						</form>
					</div>
				</div>
			<div className='sort-btn' onClick={toggleMenuSort}>
				<Icon name="filter"/>
				<span>Сортувати</span>
				<div className={`sort-menu ${isSortOpen ? 'active' : ''}`}>
					<ul>
						<li>За зростання ціни</li>
						<li>За спаданням ціни</li>
					</ul>
				</div>
			</div>
		</div>
	)
}