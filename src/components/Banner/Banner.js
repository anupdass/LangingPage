import React from 'react'
import Button from '../Button/Button'
import './banner.css'

function Banner() {
    return (
        <div className='container'>
            <div className='banner__container'>
                <h1>We Like To Start Your Project With Us</h1>
                <Button bgColor={"white"} btnText={'Get in Touch'} textColor={'blue'} />
            </div>
        </div>
    )
}

export default Banner