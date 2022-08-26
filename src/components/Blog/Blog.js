import React from 'react';
import news1 from '../../assets/news1.png';
import news2 from '../../assets/news2.png';
import news3 from '../../assets/news3.png';
import './blog.css';

function Blog() {

    const newsPost = [
        {
            id: 2,
            img: news2,
            date: '09 April,2022',
            describe: 'Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam ',
            read: "Read More"
        },
        {
            id: 1,
            img: news1,
            date: '09 April,2022',
            describe: 'Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam ',
            read: "Read More"
        },
        {
            id: 3,
            img: news3,
            date: '09 April,2022',
            describe: 'Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam ',
            read: "Read More"
        },
    ]

    return (
        <div className='container' id='news'>
            <div className='testimony__content'>
                <h3>BLOG </h3>
                <h1>Read OurNews</h1>
            </div>
            <div className='post__container'>
                {
                    newsPost.map(post =>
                        <div key={post.id}>
                            <img src={post.img} alt='post image' />
                            <p>{post.date}</p>
                            <p>{post.describe}</p>
                            <p className='post__readMore'>{post.read}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Blog