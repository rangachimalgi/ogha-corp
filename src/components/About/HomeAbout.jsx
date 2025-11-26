import {useState, useEffect, useRef} from "react";
import SectionTitle from '../SectionTitles/SectionTitle';
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
import {Link} from "react-router-dom";

const HomeAbout = () => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-padding-t90 section-padding-bottom">
            <div className="container">

                <SectionTitle
                    title="About Ogha Corp"
                    subTitle=" &apos;&apos;Harmony in Diversity, Excellence in Unity — Together, we redefine possibilities.&apos;&apos; "
                />

                <div className="row">

                    
                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/aed-photo/shots/IMG_7635.jpg"} alt="" width="500" height="400" />
                                </Tilt>
                            </div>
                        
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/aed-photo/shots/IMG_7628.jpg"} alt="" width="400" height="400"/>
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/about-shape-1.png"} alt="" /></span>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <SectionTitleTwo 
                                title="Pioneering affordable high-tech solutions, transforming lives across India."
                            />

                            <p>We are dedicated to revolutionizing India&apos;s technology to transform lifestyles with affordable high-tech solutions, making advanced technology a standard part of daily life in India.
                            
                            At OGHA CORP, we harness the power of technology to uplift communities, drive economic growth, and enhance lives.  <br></br>
                            
                            Our diverse team, comprising seasoned experts with 70+ years of combined experience in public service along with trade and commerce, alumni from esteemed institutions like IIT Madras, and students from top school, aim to be at the forefront of shaping India&apos;s technological landscape, bringing forth solutions that redefine possibilities and improve the lives of millions.</p>

                            <Link className="btn btn-primary btn-hover-secondary mt-xl-8 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/about"}>About Us</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeAbout;
