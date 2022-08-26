import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import Banner from '../../components/Banner/Banner'
import Blog from '../../components/Blog/Blog'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import NavBar from '../../components/NavBar/NavBar'
import Portfolio from '../../components/Portfolio/Portfolio'
import Testinomial from '../../components/Testinomial/Testinomial'
import ScrollToTop from "react-scroll-to-top";
function Home() {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <AboutUs />
            <Portfolio />
            <Testinomial />
            <Blog />
            <Banner />
            <Footer />
            <ScrollToTop smooth />
        </div>
    )
}

export default Home