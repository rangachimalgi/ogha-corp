import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../components/logo/Logo';
import FooterData from '../../data/Footer/footerItem.json';
import FooterLinkItem from '../../components/Footer/FooterLinkItem.jsx';

const Footer = () => {
    return (
        <div className="footer-section section footer-bg-color">
            <div className="container">
                <div className="row mb-lg-14 mb-md-10 mb-6">

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 col-12 mb-6">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Logo 
                                    image={`${process.env.PUBLIC_URL}/images/logo/footer-logo.png`}
                                />
                            </div>
                            <div className="footer-widget-content">
                                <div className="content">


                                    <p><Link to={process.env.PUBLIC_URL + "/"}>(+91) 9845011345/ 9900053038</Link></p>
                                    <p><Link to={process.env.PUBLIC_URL + "/"}>harshasali@oghacorp.com/
                                    enquiry@oghacorp.com</Link> </p>
                                </div>
                                <div className="footer-social-inline">
                                    <a href="https://wa.me/message/6VKOIRRARHBDL1"><i className="fab fa-whatsapp-square"></i></a>
                                    <a href="https://www.facebook.com/profile.php?id=61556300768364"><i className="fab fa-facebook-square"></i></a>
                                    <a href="https://www.instagram.com/oghacorp/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {FooterData && FooterData.map((single, key) => {
                            return(
                                <div key={key} className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-6">
                                    <FooterLinkItem data={single} key={key} />
                                </div>
                            ); 
                    })}


                </div>

                <div className="row">
                    <div className="col">
                        <p className="copyright">&copy; {new Date().getFullYear()} <strong>Ogha Corp</strong> Made with <i className="fas fa-heart text-danger"></i> </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
