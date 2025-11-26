import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ContactInformation from '../container/ContactInformation/ContactInformation';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const Contact = () => {
    return (
        <React.Fragment>
            <SEO title="Ogha Corp || Contact" />
            <Header />
            <Breadcrumb 
                image="images/aed-photo/shots/trail4.jpg"
                title="We are located in Bangalore, India"
                content="Home"
                contentTwo="Contact Us"
            />
            <ContactInformation />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Contact;