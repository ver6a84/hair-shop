import './Filters.css'
import Icon from './icon'
import { useState,useEffect } from 'react'

export default function Filters({ 
	selectedType, 
	setSelectedType, 
	selectedLength, 
	setSelectedLength }) {
	const [isFiltersOpen, setIsFiltersOpen] = useState(false)
	const [isMaterialOpen, setIsMaterialOpen] = useState(false)
	const [isPriceOpen, setIsPriceOpen] = useState(false)
	const [isLengthOpen, setIsLengthOpen] = useState(false)
	
	const handleTypeClick = (type) => {
  setSelectedType(prev =>
    prev.includes(type)
      ? prev.filter(t => t !== type)
      : [...prev, type]
  );
};


	const handleLengthClick = (length) => {
  setSelectedLength(prev =>
    prev.includes(length)
      ? prev.filter(l => l !== length)
      : [...prev, length]
  );
};


	const showMenuFilters = () => setIsFiltersOpen(true)

	const closeMenuFilters = () => setIsFiltersOpen(false) 

const toggleMaterial = () => setIsMaterialOpen(!isMaterialOpen)

 const togglePrice = () => setIsPriceOpen(!isPriceOpen)

 const toggleLength = () => setIsLengthOpen(!isLengthOpen)

 useEffect(() => {
  if (isFiltersOpen) {
    document.documentElement.classList.add('menu-open');
  } else {
    document.documentElement.classList.remove('menu-open');
  }
}, [isFiltersOpen]);

	return (
			<div className="filters">
				<div className="filters-btn-wrapper" onClick={showMenuFilters}>
				<Icon name="filter"/>
				<div className="filters-btn">Фільтри</div>
			</div>
			<div className={`filter-menu ${isFiltersOpen ? 'active' : ''}`}>
					<div className="filter-heading">
						<h2>Фільтри</h2>
						<div className="close-btn" onClick={closeMenuFilters}><Icon name="close"/></div>
					</div>
					<div className="filter-material">
						<div className="material-heading">
							<h2>Матеріал</h2>
							<div className="material-list-btn" onClick={toggleMaterial}><Icon name="arrow_down"/></div>
						</div>
						<ul className={`material-list ${isMaterialOpen ? 'active' : ''}`}>
							<li>
								<input 
								type="checkbox"
								checked={selectedType.includes(1)}
    						onChange={() => handleTypeClick(1)}
								/>
								<span>Натуральне волосся</span>
								</li>
							<li>
								<input 
								checked={selectedType.includes(2)}
    						onChange={() => handleTypeClick(2)}
								type="checkbox"/>
								<span>Синтетика</span>
								</li>
						</ul>
					</div>
					<div className="filter-price">
						<div className="price-heading">
							<h2>Ціна</h2>
							<div className="price-options-btn" onClick={togglePrice}><Icon name="arrow_down"/></div>
						</div>
						<form className={`price-options ${isPriceOpen ? 'active' : ''}`}>
							<div className="price-inputs">
							<label className="min-price" htmlFor="min-price">
							<input id="min-price"  type="text" />
							<span className='at'>від</span>
							</label>
							<div className='price-separator'></div>
							<label className="max-price" htmlFor="max-price">
							<input id="max-price"  type="text"/>
							<span className='to'>до</span>
							</label>
							</div>
							<button>ОК</button>
						</form>
					</div>
					<div className="filter-length">
						<div className="length-heading">
							<h2>Довжина</h2>
							<div className="length-list-btn" onClick={toggleLength}><Icon name="arrow_down"/></div>
						</div>
						<ul className={`length-list ${isLengthOpen ? 'active' : ''}`}>
							<li>
								<input 
							type="checkbox"
							checked={selectedLength.includes('LONG')}
							onChange={() => handleLengthClick('LONG')}
							/>
							<span>Довгі</span>
							</li>
								<li>
									<input 
							type="checkbox"
							checked={selectedLength.includes('MEDIUM')}
							onChange={() => handleLengthClick('MEDIUM')}
							/>
							<span>Каре</span>
							</li>
							<li>
								<input 
							type="checkbox"
							checked={selectedLength.includes('SHORT')}
							onChange={() => handleLengthClick('SHORT')}
							/>
								<span>Короткі</span>
								</li>
						</ul>
					</div>
					<div 
					className="apply-btn"
					onClick={() => {
						setIsFiltersOpen(false)
					}}
					>Застосувати фільтри
					</div>
				</div>
			</div>
	)
}