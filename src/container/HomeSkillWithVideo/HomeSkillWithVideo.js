import React, { useState } from "react";
import {Link} from "react-router-dom";
import ModalVideo from "react-modal-video";


const HomeSkillWithVideo = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="video-section section section-padding">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
                        <div className="skill-with-video-content">
                            <div className="section-title-two mb-8">
                                <span className="sub-title">Tomorrows future today</span>
                                <h3 className="title">Automated External Defibrillator</h3>
                                <div className="text" >Is a portable electronic device designed to diagnose and treat life-threatening cardiac arrhythmias which leads to cardiac arrest, where the heart stops beating effectively.</div>
                                <div className="text">The AED works by analyzing the hearts rhythm and, if necessary, delivering an electrical shock, or defibrillation, to help the heart re-establish an effective rhythm. </div>
                            </div>

                            <div className="section-title-two mb-8">
                                <h3 className="title">Advantages Automated External Defibrillator</h3>
                            </div>
                            <ul className="agency-list">
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text"> <b>Survival Rate:</b> Rapid defibrillation within the first 4-7 minutes of cardiac arrest can increase the survival rate by up to 70%.</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text"><b>Response Time:</b> Every minute that defibrillation is delayed, the likelihood of survival decreases by around 10%.</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text"><b>User-Friendly:</b> Laypeople can use AEDs effectively by following audio Instructions, bridging the gap before medical help arrives.</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text"><b>Portable:</b> AEDs are compact and portable, facilitating easy transportation to different locations.</div>
                                </li>
                            </ul>
                            <div className="intro-content-two"> 
                            <Link to={process.env.PUBLIC_URL + "/service"} className="btn btn-primary btn-hover-secondary">Learn More</Link>
                            <a href="https://drive.google.com/uc?export=download&id=17khlF_oFRFqvYahRYBhyCVrv85chCpS-" className="btn btn-primary btn-hover-secondary">Download Brochure</a>
                            </div>
                        </div>
                    </div>

                    <div className="offset-xl-1 col-xl-6 col-lg-6 col-12">
                        <div className="video-popup-area">
                            <div className="skill-video">
                                <img className="image" src={process.env.PUBLIC_URL + "/images/video/AEDOgha.jpg"} alt="video popup" />
                                <button className="icon" onClick={()=> setOpen(true)}><i className="fas fa-play"></i></button>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="d8zqAJgDxSU" onClose={() => setOpen(false)}/>
                            </div>

                            <div className="shape shape-1 scene">
                                <span data-depth="1">
                                    <img src={process.env.PUBLIC_URL + "/images/shape-animation/video-shape-1.png"} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}


export default HomeSkillWithVideo;