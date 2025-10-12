import { createContext, useContext } from 'react'
import { useLocalStorage } from '@hooks/useLocalStorage'

const CartContext = createContext()

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage('cart', [])

  const addToCart = (productData) => {
    const { product_id, variantId, name, price, image, description, quantity = 1 } = productData
    
    // Create unique cart item ID
    const cartItemId = `${product_id}-${variantId}`
    
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(item => item.id === cartItemId)
    
    if (existingItemIndex >= 0) {
      // Update existing item quantity
      const updatedItems = [...cartItems]
      updatedItems[existingItemIndex].quantity += quantity
      setCartItems(updatedItems)
    } else {
      // Add new item
      const newItem = {
        id: cartItemId,
        product_id,
        variantId,
        name,
        price,
        image,
        description,
        quantity
      }
      setCartItems([...cartItems, newItem])
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId))
  }

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId)
      return
    }

    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ))
  }

  const clearCart = () => {
    setCartItems([])
  }

  // Calculate totals
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const value = {
    cartItems,
    total,
    itemCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
