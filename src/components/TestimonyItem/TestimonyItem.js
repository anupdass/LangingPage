import React from 'react'
import './testmonyitem.css'

function TestimonyItem({ img, description, name, designation }) {
    return (
        <div>
            <div className='testimony__item'>
                <div className='testimony__left'></div>
                <div className='testimony__middle'>
                    <img src={img} alt='profile image' />
                    <p>{description}</p>
                    <div className='textinomy__name'>
                        <h2>{name}</h2>
                        <h3>{designation}</h3>
                    </div>
                </div>
                <div className='testimony__right'></div>
            </div>
        </div>
    )
}

export default TestimonyItem