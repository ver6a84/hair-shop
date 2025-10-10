import { HAIR_LENGTHS } from '@utils/constants';

const baseUrl = 'https://api.perukytyt.com/v1';

const itemsPerPage = 4;

function getTotalPages(filtered) {
  return Math.ceil(filtered.length/itemsPerPage)
}

function getPage(filtered, pageNumber) {
  if (pageNumber < 1 || pageNumber > getTotalPages(filtered)) return [];
  const start = (pageNumber - 1) * itemsPerPage;
  return filtered.slice(start, start + itemsPerPage);
}

function getHairLengthCategory(lengthValue) {
  const numericLength = Number(lengthValue); 
  for (const key in HAIR_LENGTHS) {
    const [min, max] = HAIR_LENGTHS[key];
    if (numericLength >= min && numericLength <= max) {
      return key;
    }
  }
  return null;
}

export const getProducts = async ({ category, type, length, minPrice, maxPrice, page = 1 }) => {
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
    .filter(product => {
      if (!length?.length) return true;
      const category = getHairLengthCategory(product.length);
      return length.includes(category);
    })
    .filter(product => {
      const prices = product.variants.map(v => Number(v.price));
      const min = Math.min(...prices);
      return (!minPrice || min >= Number(minPrice)) &&
            (!maxPrice || min <= Number(maxPrice));
    })
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