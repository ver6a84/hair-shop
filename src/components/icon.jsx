import Burger from '../assets/icons/burger.svg?react'
import Cart from '../assets/icons/cart.svg?react'
import Close from '../assets/icons/cross.svg?react'
import User from '../assets/icons/user.svg?react'
import Search from '../assets/icons/search.svg?react'
import Phone from '../assets/icons/phone.svg?react'
import Mail from '../assets/icons/mail.svg?react'
import Telegram from '../assets/icons/telegram.svg?react'
import Viber from '../assets/icons/viber.svg?react'


const Icons = {
  burger: Burger,
  cart: Cart,
  cross: Close,
  close: Close,
  user: User,
  search: Search,
  phone: Phone,
  mail: Mail,
  telegram: Telegram,
  viber: Viber,
};

export default function Icon({ name, size = 48, ...props }) {
  const Component = Icons[name];
  return Component ? <Component width={size} height={size} {...props} /> : null;
}
