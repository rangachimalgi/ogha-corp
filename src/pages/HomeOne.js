import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import IntroSlider from '../container/IntroSlider/IntroSlider';
import HomeAbout from '../components/About/HomeAbout.jsx';
import ServiceIconBox from '../container/service/ServiceIconBox';
import HomeSkillWithVideo from '../container/HomeSkillWithVideo/HomeSkillWithVideo';
import ContactInformation from '../container/ContactInformation/ContactInformation';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';


const HomeOne = () => {
    return (
        <React.Fragment>
            <SEO title="Ogha Corp Home Page"/>
            <Header />
            <IntroSlider />
            <HomeSkillWithVideo />
            <ServiceIconBox classOption="bg-color-1"/>
            <HomeAbout />
            <ContactInformation classOption="bg-primary-blue" />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default HomeOne;