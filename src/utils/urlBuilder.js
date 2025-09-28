import { CATEGORIES_URLS, ROUTES } from '@utils/constants';


export const getCategoryUrl = (categoryId) => {
  return `${ROUTES.PRODUCTS}/${CATEGORIES_URLS[categoryId]}`;
}
