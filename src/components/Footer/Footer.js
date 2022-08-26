import React from 'react'
import { GrFacebook } from 'react-icons/gr'
import { FaTwitterSquare, FaInstagram } from 'react-icons/fa'
import { TiArrowRightThick } from 'react-icons/ti'
import './footer.css'

function Footer() {
    return (
        <div className='container' id='contact'>
            <div className='footer__container'>
                <div className='footer__logo'>
                    <h1 className='footer__logo'>LOGO</h1>
                </div>
                <div className='footer__contact'>
                    <h1>Our Contact</h1>
                    <p>Office: 4042 Imperial Road, UK</p>
                    <p>Help; (0411) 425 277 / 425</p>
                    <p>Email: inbox@finance.com</p>
                </div>
                <div className='footer__about'>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies </p>
                </div>
                <div className='footer__subscribe'>
                    <h1>Subscribe</h1>

                    <div className='footer__email'>
                        <input placeholder='your email' />
                        <TiArrowRightThick size={30} color='blue' cursor={'pointer'} />
                    </div>

                    <h1>Follow Us</h1>
                    <GrFacebook size={23} style={{ marginRight: '10px' }} />
                    <FaTwitterSquare size={25} style={{ margin: '0 10px' }} />
                    <FaInstagram size={25} style={{ margin: '0 10px' }} />
                </div>
            </div>
        </div>
    )
}

export default Footer