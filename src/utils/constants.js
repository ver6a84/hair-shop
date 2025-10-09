// App constants
export const APP_NAME = 'Hair Shop'
export const APP_VERSION = '1.0.0'

// API endpoints
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.hairshop.com' 
  : 'http://localhost:3000/api'

// Product categories
export const PRODUCT_CATEGORIES = {
  WIGS: 1,
  TAILS: 2,
  TOPPERS: 3
};
export const COLOR_CATEGORIES = {
  LIGHT: 1,
  DARK: 2
}
export const COLORS = {
  BLACK: 1,
  BROWN: 2,
  BLONDE: 3,
  RED: 4
};

const HAIR_TYPES = {
  NATURAL: 1,
  SYNTHETIC: 2
};

 export const HAIR_LENGTHS = {
  SHORT: [0, 15],
  MEDIUM: [15, 30],
  LONG: [30, 50]
};

export const CATEGORIES_DESCRIPTION = {
  [PRODUCT_CATEGORIES.WIGS]: '',
  [PRODUCT_CATEGORIES.TAILS]: '',
  [PRODUCT_CATEGORIES.TOPPERS]: ''
}

export const CATEGORIES_URLS = {
  [PRODUCT_CATEGORIES.WIGS]: 'wigs',
  [PRODUCT_CATEGORIES.TAILS]: 'tails',
  [PRODUCT_CATEGORIES.TOPPERS]: 'toppers'
};

export const CATEGORIES_TRANSLATIONS = {
  [PRODUCT_CATEGORIES.WIGS]: 'Перуки',
  [PRODUCT_CATEGORIES.TAILS]: 'Хвостики',
  [PRODUCT_CATEGORIES.TOPPERS]: 'Топери'
};



 export const COLOR_CATEGORIES_TRANSLATIONS = {
  [COLOR_CATEGORIES.LIGHT]: 'Світлий',
  [COLOR_CATEGORIES.DARK]: 'Темний'
};

export const CATEGORIES_COLORS = {
  [COLOR_CATEGORIES.LIGHT]: [COLORS.BLONDE],
  [COLOR_CATEGORIES.DARK]: [COLORS.BLACK, COLORS.BROWN, COLORS.RED]
};



export const HAIR_TYPES_TRANSLATIONS = {
  [HAIR_TYPES.NATURAL]: 'Натуральний',
  [HAIR_TYPES.SYNTHETIC]: 'Синтетичний'
};


 export const HAIR_LENGTHS_TRANSLATIONS = {
  [HAIR_LENGTHS.SHORT]: 'Короткий',
  [HAIR_LENGTHS.MEDIUM]: 'Каре',
  [HAIR_LENGTHS.LONG]: 'Довгий'
};



const COLORS_TRANSLATIONS = {
  [COLORS.BLACK]: 'Чорний',
  [COLORS.BROWN]: 'Коричневий',
  [COLORS.BLONDE]: 'Блонд',
  [COLORS.RED]: 'Рудий'
};

// Routes
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  CART: '/cart',
  ABOUT: '/about',
  CONTACT: '/contact',
  CONTACTUS: '/contactUs',
  DELIVERY: '/delivery',
  RETURN: '/return',
  CARE: '/care'
}

export const SERVICE_ID = 'service_j7qrtug';
export const TEMPLATE_ID_CONTACT_US = 'template_suxpbsw';
export const TEMPLATE_ID_ORDER = 'template_hs606rg';
export const PUBLIC_KEY = 'b2mz7W1o1e4LwrwL3';
