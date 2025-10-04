import { CATEGORIES_COLORS } from '@utils/constants';

const baseUrl = 'https://api.perukytyt.com/v1';

const itemsPerPage = 3;

function getTotalPages(filtered) {
  return Math.ceil(filtered.length/itemsPerPage)
}

function getPage(filtered, pageNumber) {
  if (pageNumber < 1 || pageNumber > getTotalPages(filtered)) return [];
  const start = (pageNumber - 1) * itemsPerPage;
  return filtered.slice(start, start + itemsPerPage);
}

export const getProducts = async ({ category, type, length, color, colorCategory, page = 1 }) => {
  const response = await fetch(`${baseUrl}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  const products = data.products;
  const filtered = products

    .filter(product => !category || category === product.category)
    .filter(product => !type?.length || type.includes(product.type))
    .filter(product => !length?.length || length.includes(product.length))
/*
    .filter(product => !category || category == product.category)
    .filter(product => !type || type === product.type)
    .filter(product => !length || length === product.length)
*/
    .filter(product => {
      if (!color && !colorCategory) return true;

      const allowedColors = colorCategory
        ? CATEGORIES_COLORS[colorCategory]
        : [color];

      return product.variants.some(variant => allowedColors.includes(variant.color));
    });
 
    return {
    items: getPage(filtered, page),
    totalPages: getTotalPages(filtered),
  };
};

export const getProduct = async (id) => {
  const response = await fetch(`${baseUrl}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  const products = data.products;
  return products.find(p => p.id === id) || null;
};