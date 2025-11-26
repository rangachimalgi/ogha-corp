import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import AboutFour from '../container/About/AboutFour';
import AboutFive from '../container/About/AboutFive';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import HomeAbout from '../components/About/HomeAbout.jsx';





const AboutUs = () => {
    return (
        <React.Fragment>
            <SEO title="Ogha Corp || About" />
            <Header />
            <Breadcrumb 
                image="images/aed-photo/shots/trail1.jpg"
                title="Ogha Corp & Team"
                content="Home"
                contentTwo="About Us"
            />
            <AboutFour/>
            <HomeAbout />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default AboutUs;



