import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import FocusTrap from 'focus-trap-react'
import Icon from '@components/icon'
import './Header.css'

// Menu Button Component
function MenuButton({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      className="menu-button"
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      <motion.div
        className="menu-icon"
        animate={open ? 'open' : 'closed'}
        variants={{
          closed: { rotate: 0 },
          open: { rotate: 45 }
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          className="menu-line"
          variants={{
            closed: { opacity: 1, y: 0 },
            open: { opacity: 0, y: -8 }
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="menu-line"
          variants={{
            closed: { rotate: 0 },
            open: { rotate: 90 }
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="menu-line"
          variants={{
            closed: { opacity: 1, y: 0 },
            open: { opacity: 0, y: 8 }
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </button>
  )
}

// Fullscreen Menu Component
function FullscreenMenu({ open, onClose }) {
  const menuItems = [
    { label: 'Головна', href: '/' },
    { label: 'Товари', href: '/products' },
    { label: 'Про нас', href: '/about' },
    { label: 'Контакти', href: '/contact' },
    { label: 'Кошик', href: '/cart' }
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fullscreen-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="fullscreen-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 200,
              duration: 0.4 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FocusTrap>
              <nav className="fullscreen-nav">
                <div className="menu-header">
                  <div className="menu-logo">
                    <div className="logo-icon">H</div>
                    <span className="logo-text">Hair Shop</span>
                  </div>
                  <button
                    className="close-button"
                    onClick={onClose}
                    aria-label="Close menu"
                  >
                    <Icon name="cross" />
                  </button>
                </div>
                
                <div className="menu-links">
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="menu-link"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                
                <div className="menu-footer">
                  <div className="contact-info">
                    <p><Icon name="phone" /> +380 (67) 123-45-67</p>
                    <p><Icon name="mail" /> info@hairshop.com</p>
                  </div>
                  <div className="social-links">
                    <a href="#" aria-label="Telegram"><Icon name="telegram" /></a>
                    <a href="#" aria-label="Viber"><Icon name="viber" /></a>
                  </div>
                </div>
              </nav>
            </FocusTrap>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Main Header Component
export default function Header() {
  const [open, setOpen] = useState(false)

  // Handle scroll locking when menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [open])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  const navigationItems = [
    { label: 'Головна', href: '/' },
    { label: 'Товари', href: '/products' },
    { label: 'Про нас', href: '/about' },
    { label: 'Контакти', href: '/contact' }
  ]

  return (
    <>
      {/* Sticky Header */}
      <header className="modern-header">
        <div className="header-container">
          <div className="header-content">
            <Link to="/" className="header-logo">
              <div className="logo-icon">H</div>
              <span className="logo-text">Hair Shop</span>
            </Link>

            <nav className="header-nav">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="header-actions">
              <Link
                to="/cart"
                className="cart-button"
                aria-label="Shopping cart"
              >
                <Icon name="cart" />
              </Link>
              <MenuButton open={open} onClick={() => setOpen((v) => !v)} />
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu */}
      <FullscreenMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
