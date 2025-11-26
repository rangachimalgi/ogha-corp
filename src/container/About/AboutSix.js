import {useState, useEffect, useRef} from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import {Link} from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';


const AboutSix = () => {
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
        <div className="section section-padding-top technology-section-padding-bottom-180">
            <div className="container">

                <div className="row">

                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/aed-photo/shots/IMG_7624.jpg"} alt="" width="500" height="400"/>
                                </Tilt>
                            </div>
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/aed-photo/shots/IMG_7554.jpg"} alt="" width="400" height="400"/>
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
                                subTitle="Trends and Cases"
                                title="Rising Cardiovascular Diseases Rates in India"
                            />
                            <p>India is experiencing a increase in cardiovascular diseases including cardiac arrest cases. <br></br>
                                The average age of the population experiencing cardiac death ranges from <b>35-85 years</b> due to hypertension, Diabetes, Stress, Covid etc.<br></br>
                                In India, estimated number of cardiac arrest stands at <b>4,280 per 100,000</b> individuals.<br></br>
                            </p>
                            <br></br>
                            <br></br>
                            <h3>Response Times in Cardiac Arrest</h3>

                            <p>The average response time of ambulances in India set by government is <b>25-30 minutes.</b><br></br>
                                The variability in the response times of emergency medical services is a major issue.<br></br>
                                Optimal window for reviving an individual from a cardiac arrest is the first <b>4-7 minutes.</b><br></br>
                                Conversely, each minute of delay in intervention reduces the survival rate by <b>about 10%.</b><br></br>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutSix;
