import React from 'react';
import { image2, gear, heartbeat, calculator, science, development, money, design, humanmind, trophy, classroom, mouse1, certificate, course1, course2, course3, course4, course5, course6, course7, course8, video1, crown, img04, img05, slide6, chip } from '../../imgsource';

const BannerSectionDivision = () => {
    return (
        <section id="banner-2" className="bg-06 wide-60 banner-section">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* BANNER TEXT */}
                    <div className="col-md-7">
                        <div className="banner-2-txt white-color">
                            {/* Title */}
                            <h3 className="h3-lg">Register now for getting <span>200+ courses free access</span>. This offer for limited time</h3>
                            {/* COUNTDOWN ELEMENT */}
                            <div className="countdown">
                                <span className="countdown-txt">Ends in</span>
                                <div id="clock" />
                            </div>
                        </div>
                    </div>
                    {/* REGISTER FORM */}
                    <div className="col-md-5">
                        <div id="register-form">
                            <form name="registerForm" className="row register-form">
                                {/* Form Input */}
                                <div id="input-name" className="col-md-12">
                                    <p>Your Name*</p>
                                    <input type="text" name="name" autoComplete="off" className="form-control name" placeholder="Enter Your Name*" required />
                                </div>
                                {/* Form Input */}
                                <div id="input-email" className="col-md-12">
                                    <p>Your Email*</p>
                                    <input type="email" name="email" autoComplete="off" className="form-control email" placeholder="Enter Your Email*" required />
                                </div>
                                {/* Form Input */}
                                <div id="input-phone" className="col-md-12">
                                    <p>Your Phone Number*</p>
                                    <input type="tel" name="phone" autoComplete="off" className="form-control phone" placeholder="Enter Your Phone Number*" required />
                                </div>
                                {/* Form Button */}
                                <div className="col-md-12 form-btn">
                                    <button type="submit" className="btn btn-md btn-rose tra-black-hover submit">Register Now</button>
                                </div>
                                {/* Form Message */}
                                <div className="col-md-12 register-form-msg text-center">
                                    <span className="loading" />
                                </div>
                            </form>
                        </div>
                    </div> {/* END REGISTER FORM */}
                </div> {/* End row */}
            </div> {/* End container */}
        </section>
    );
}

export default BannerSectionDivision;
