import React from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import './navbar.css'

function NavBar() {
    return (
        <div className='container'>
            <div className='nav__container'>
                <h1>LOGO</h1>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimony">Testimony</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <HiMenuAlt3 size={28} className='nav__container-icon' />
            </div>
        </div>
    )
}

export default NavBar;