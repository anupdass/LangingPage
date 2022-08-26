import React from 'react'
import Button from '../Button/Button'
import heroImg from '../../assets/hero.png'
import heroSideImg from '../../assets/heroSide.png'

import { FaPenNib, FaConnectdevelop } from 'react-icons/fa'
import { BsCheck2Square } from 'react-icons/bs'

import './herosection.css'

function HeroSection() {

    const service = [
        {
            id: 1,
            title: 'Design',
            icon: FaPenNib,
            bg: '#F0BB1F',
            description: 'Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus  id et viverra augu'
        },
        {
            id: 2,
            bg: '#F15A2B',
            title: 'Development',
            icon: FaConnectdevelop,
            description: 'Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus  id et viverra augu'
        },
        {
            id: 3,
            bg: '#006380',
            title: 'Testing & QA',
            icon: BsCheck2Square,
            description: 'Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus  id et viverra augu'
        },
    ]

    return (
        <div className='container'>
            <div className='hero__container'>
                <div className='hero__container__top'>
                    <div className='hero__container__content'>
                        <h3>CREATIVE WORK,CREATIVE MIND</h3>
                        <h1>We Are Digital Creative Agency</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi sed metus id et viverra augue.</p>
                        <Button bgColor={'#4270EC'} btnText={'Get in Touch'} textColor={'white'} />
                    </div>
                    <img src={heroImg} alt="this is a her image" />
                    <img src={heroSideImg} alt="this is a her image" className='secondImg' />
                </div>

                <div className='service__container'>
                    {
                        service.map(item =>
                            <div key={item.id} className="service__item">
                                <div className='service__item--icon' style={{ backgroundColor: item.bg }} >
                                    <item.icon size={30} />
                                </div>
                                <div className='service__item__content'>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default HeroSection