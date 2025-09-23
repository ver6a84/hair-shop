import Burger from '../assets/icons/burger.svg?react'
import Cart from '../assets/icons/cart.svg?react'
import Close from '../assets/icons/cross.svg?react'
import User from '../assets/icons/user.svg?react'
import Search from '../assets/icons/search.svg?react'


const Icons = {
  burger: Burger,
  cart: Cart,
  close: Close,
  user: User,
  search: Search,
};

export default function Icon({ name, size = 48, ...props }) {
  const Component = Icons[name];
  return Component ? <Component width={size} height={size} {...props} /> : null;
}
