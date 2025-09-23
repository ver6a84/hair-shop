// App constants
export const APP_NAME = 'Hair Shop'
export const APP_VERSION = '1.0.0'

// API endpoints
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.hairshop.com' 
  : 'http://localhost:3000/api'

// Product categories
export const PRODUCT_CATEGORIES = {
  WIGS: 'wigs',
  TAILS: 'tails', 
  TOPPERS: 'toppers',
  SALE: 'sale'
}

// Routes
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  CART: '/cart',
  ABOUT: '/about',
  CONTACT: '/contact'
}
