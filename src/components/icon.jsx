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
import GoldCart  from '../assets/icons/gold-cart.svg?react'
import CallingPhone  from '../assets/icons/calling-phone.svg?react'
import Delivery  from '../assets/icons/delivery.svg?react'
import PostOffice from '../assets/icons/post-office.svg?react'
import Filter from '../assets/icons/filter.svg?react'
import ArrowDown from '../assets/icons/arrow-down.svg?react'
import ArrowLeft from '../assets/icons/left.svg?react'
import ArrowRight from '../assets/icons/right.svg?react'

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
  gold_cart: GoldCart,
  calling_phone: CallingPhone,
  delivery: Delivery,
  post_office: PostOffice,
  filter: Filter,
  arrow_down: ArrowDown,
  arrow_left: ArrowLeft,
  arrow_right: ArrowRight,
};

export default function Icon({ name, size = 24, ...props }) {
  const Component = Icons[name];
  return Component ? <Component width={size} height={size} {...props} /> : null;
}
