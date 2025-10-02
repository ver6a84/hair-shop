import { NavLink } from 'react-router-dom';
import { CATEGORIES_TRANSLATIONS } from '@utils/constants';
import { getCategoryUrl } from '@utils/urlBuilder';
import './BreadCrumb.css'

export default function Breadcrumb({ categoryId, productName }) {
  return (
    <div className="breadcrumb">
      <NavLink to="/" end>Головна</NavLink>
   		<span className="separator">/</span>
			<NavLink to="/products" end>Каталог</NavLink>
			{categoryId && (
        <>
          <span className="separator">/</span>
          <NavLink to={getCategoryUrl(categoryId)} end>
            {CATEGORIES_TRANSLATIONS[categoryId] || 'Категорія'}
          </NavLink>
        </>
      )}
			{productName && (
        <>
       		<span className="separator">/</span>
          <span className="current">{productName}</span>
        </>
      )}
    </div>
  );
}
