import Burger from '../assets/icons/burger.svg?react'
import Cart from '../assets/icons/cart.svg?react'
import Close from '../assets/icons/cross.svg?react'
import User from '../assets/icons/user.svg?react'
import Search from '../assets/icons/search.svg?react'
import Phone from '../assets/icons/phone.svg?react'
import Mail from '../assets/icons/mail.svg?react'
import Telegram from '../assets/icons/telegram.svg?react'
import Viber from '../assets/icons/viber.svg?react'
import TikTok from '../assets/icons/tiktok.svg?react'
import Instagram from '../assets/icons/instagram.svg?react'
import Facebook from '../assets/icons/facebook.svg?react'
import Copyright from '../assets/icons/copyright.svg?react'
import Location  from '../assets/icons/location.svg?react' 
import Calendar  from '../assets/icons/calendar.svg?react' 
import GoldCart from

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
  tiktok: TikTok,
  instagram: Instagram,
  facebook: Facebook,
  copyright: Copyright,
  location: Location,
  calendar: Calendar,
};

export default function Icon({ name, size = 24, ...props }) {
  const Component = Icons[name];
  return Component ? <Component width={size} height={size} {...props} /> : null;
}
