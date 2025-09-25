import logoImg from '../../public/Logo.png'
import './Logo.css'

export default function Logo() {
    return (
        <div className="logo">
          <img src={logoImg} alt="Logo" />
        </div>
    )
}