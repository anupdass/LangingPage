import React from 'react'
import Slider from 'react-slick'
import TestimonyItem from '../TestimonyItem/TestimonyItem';
import './testimony.css'

function Testinomial() {

    const testimony = [
        {
            id: 1,
            img: 'https://media.istockphoto.com/photos/m-confident-that-i-have-what-it-takes-picture-id1149470814?k=20&m=1149470814&s=612x612&w=0&h=PDb7XSp8mWalsHv9V3awiNIzG8XF7htoBZLvnSdSy-M=',
            designation: 'IT Office',
            name: 'James Jokovic',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.'
        },
        {
            id: 2,
            img: 'https://media.istockphoto.com/photos/m-confident-that-i-have-what-it-takes-picture-id1149470814?k=20&m=1149470814&s=612x612&w=0&h=PDb7XSp8mWalsHv9V3awiNIzG8XF7htoBZLvnSdSy-M=',
            designation: 'IT Office',
            name: 'James Jokovic',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.'
        },
        {
            id: 3,
            img: 'https://media.istockphoto.com/photos/m-confident-that-i-have-what-it-takes-picture-id1149470814?k=20&m=1149470814&s=612x612&w=0&h=PDb7XSp8mWalsHv9V3awiNIzG8XF7htoBZLvnSdSy-M=',
            designation: 'IT Office',
            name: 'James Jokovic',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.'
        },
        {
            id: 4,
            img: 'https://media.istockphoto.com/photos/m-confident-that-i-have-what-it-takes-picture-id1149470814?k=20&m=1149470814&s=612x612&w=0&h=PDb7XSp8mWalsHv9V3awiNIzG8XF7htoBZLvnSdSy-M=',
            designation: 'IT Office',
            name: 'James Jokovic',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.'
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,

    };

    return (
        <div className='container testimony__main' id='testimony'>
            <div className='testimony__content'>
                <h3>TESTIMONY </h3>
                <h1>What Do Our Clients Says About Us</h1>
            </div>
            <div style={{ margin: '50px 0' }}>
                <Slider {...settings}>
                    {
                        testimony.map(testimony =>
                            <TestimonyItem
                                key={testimony.id}
                                name={testimony.name}
                                designation={testimony.designation}
                                img={testimony.img}
                                description={testimony.description}
                            />
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Testinomial