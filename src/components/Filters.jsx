import './Filters.css'
import Icon from './icon'
import { useState,useEffect } from 'react'

export default function Filters({ 
	setSortOrder, 
	selectedType, 
	setSelectedType, 
	selectedLength, 
	setSelectedLength }) {
	const [isFiltersOpen, setIsFiltersOpen] = useState(false)
	const [isSortOpen, setIsSortOpen] = useState(false)
	const [isMaterialOpen, setIsMaterialOpen] = useState(false)
	const [isPriceOpen, setIsPriceOpen] = useState(false)
	const [isLengthOpen, setIsLengthOpen] = useState(false)
	
	const handleTypeClick = (type) => {
  setSelectedType(prev => (prev === type ? null : type)); 
	};

	const handleLengthClick = (length) => {
  setSelectedLength(prev => (prev === length ? null : length)); 
	};

	const showMenuFilters = () => setIsFiltersOpen(true)

	const closeMenuFilters = () => setIsFiltersOpen(false) 

  const toggleMenuSort = () => setIsSortOpen(!isSortOpen)
	
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
		<div className="filters-wrapper">	
			<div className="filters">
				<div className="filters-btn-wrapper" onClick={showMenuFilters}>
				<Icon name="filter"/>
				<div className="filters-btn">Фільтри</div>
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
							<li>
								<input 
								type="checkbox"
								checked={selectedType === 1}
    						onChange={() => handleTypeClick(1)}
								/>
								<span>Натуральне волосся</span>
								</li>
							<li>
								<input 
								checked={selectedType === 2}
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
							<label className="min-price" htmlFor="min-price">
							<input id="min-price"  type="text" />
							<span className='at'>від</span>
							</label>
							<div></div>
							<label className="max-price" htmlFor="max-price">
							<input id="max-price"  type="text"/>
							<span className='to'>до</span>
							</label>
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
							checked={selectedLength === 3}
							onChange={() => handleLengthClick(3)}
							/>
							<span>Довгі</span>
							</li>
								<li>
									<input 
							type="checkbox"
							checked={selectedLength === 2}
							onChange={() => handleLengthClick(2)}
							/>
							<span>Каре</span>
							</li>
							<li>
								<input 
							type="checkbox"
							checked={selectedLength === 1}
							onChange={() => handleLengthClick(1)}
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
						}>За зростання ціни</li>
						<li onClick={() => {
							setSortOrder('desc')
							setIsSortOpen(false)
						}
						}>За спаданням ціни</li>
					</ul>
				</div>
		</div>
			</div>
			
	)
}