import React from 'react';
import aboutImg from '../../assets/about.png'
import Button from '../Button/Button';
import './aboutus.css'


function AboutUs() {
    return (
        <div className='container' id='about'>
            <div className='about__container'>
                <img src={aboutImg} alt="about image" />
                <div className='about__content'>
                    <h3>About Us</h3>
                    <h1>Design & Develoop For Better Solution</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, habitasse nec mauris sagittis imperdiet lobortis porttitor. Ipsum mi sed uta aliquet ut. Turpis viverra volutpat sed eu porta morbi egesta ut   hac rutrum ut augue vitae, nec, ut. Nibh nibh quam</p>
                    <Button bgColor={'#4270EC'} btnText={'Learn More'} textColor={'white'} />
                </div>
            </div>
        </div>
    )
}

export default AboutUs