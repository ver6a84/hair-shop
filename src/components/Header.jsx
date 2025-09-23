import './Header.css'
import Icon from './icon'

export default function Header () {
    return (
        <section className='header'>
            <div className="header-container container">
                <button className='burger-btn'>
                  <Icon name="burger"/>                  
                </button>
            </div>
        </section>
    )
}