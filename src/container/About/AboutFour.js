import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';

const AboutFour = () => {
    return (
        <div className="section section-padding-top about-section-padding-bottom-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-content-area mt-0 mb-md-10 mb-10">
                            <SectionTitleTwo 
                                title="Our Mission"
                            />
                            <p>To revolutionize the accessibility of cutting-edge technology for Indian consumers, by seamlessly integrating world-class tech solutions into their everyday lives at affordable prices.</p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <SectionTitleTwo 
                                title="Our Vision"
                            />
                            <p>Leading force in making cutting-edge global technology an integral and accessible part of every Indian citizens routine.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutFour;
