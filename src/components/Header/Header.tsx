import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'



const Header = () => {
    return (
        <header className='header d-f jc-sb align-center'>
            <div className='d-f align-center'>
                <div> <Link to='/'><img src="images/logo.svg" alt="Logo" /></Link></div>
                <div className="header-location">Вся Україна</div>
            </div>
            <nav>
                <ul className="header-nav d-f">
                    <li className="header-nav-item">
                        <Link to="desserts" className="header-nav-link">Десерти</Link>
                    </li>
                    <li className="header-nav-item">
                        <Link to="confectioners" className="header-nav-link">Кращі кондитери</Link>
                    </li>
                    <li className="header-nav-item">
                        <a href="#" className="header-nav-link">Корисні статті</a>
                    </li>
                </ul>
            </nav>
            <div className="header-actions d-f align-center">
                <button className='header-actions-info'><img src="images/info.svg" alt="Info" /></button>
                <a href="#" className="header-actions-account">Увійти</a>
            </div>

        </header>
    )
}

export default Header