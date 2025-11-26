import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ServiceIconBoxTwo from '../container/service/ServiceIconBoxTwo';
import AboutSix from '../container/About/AboutSix';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import HomeSkillWithVideo from '../container/HomeSkillWithVideo/HomeSkillWithVideo.js';
import Video from '../container/Video/Video';


const Service = () => {
    return (
        <React.Fragment>
            <SEO title="Ogha Corp || Service" />
            <Header />
            <Breadcrumb 
                image="images/aed-photo/shots/trail.jpg"
                title="Essential Life Saving Automated External Defibrillator"
                content="Home"
                contentTwo="Services"
            />
            <HomeSkillWithVideo />
            <AboutSix />
            <Video />
            <ServiceIconBoxTwo />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Service;



