import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import case1 from '../../assets/case1.png'
import case2 from '../../assets/case2.png'
import case3 from '../../assets/case3.png'

import './Portfolio.css'



function Portfolio() {

    const portImg = [
        {
            id: 1,
            img: case1,
            icon: BsArrowRight,
        },
        {
            id: 2,
            img: case2,
            icon: BsArrowRight,
        },
        {
            id: 3,
            img: case3,
            icon: BsArrowRight,
        },
    ]

    return (
        <div className='container' id='portfolio'>
            <div className='port__container'>
                <div className='port_container-left'>
                    <h3>PORTFOLIO</h3>
                    <h1>View Our Case Studies</h1>
                </div>
                <div className='port_container-right'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, hab</p>
                    <div className='port_container-righ-view'>
                        <h1 >View All </h1>
                        <BsArrowRight size={30} color={'#4270EC'} />
                    </div>
                </div>
            </div>

            <div className='port__image'>
                {
                    portImg.map(port =>
                        <div className='port__imageContainer'>
                            <img src={port.img} alt="portfolio Image" />
                            <div className='port__icon'>
                                <port.icon />
                            </div>
                        </div>

                    )
                }
            </div>

        </div>
    )
}

export default Portfolio;