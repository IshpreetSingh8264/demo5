import React from 'react';
import { slide6 } from '../../imgsource';

const Herosectiondivision = () => {
    return (
        <section id="hero-5" className="hero-section division">
            <div className="slider blue-nav">
                <ul className="slides">
                    <li id="slide-1">
                        <img src={slide6} alt="slide-background" />
                        <div className="caption d-flex align-items-center center-align">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="caption-txt white-color">
                                            <h2>25K+ Students trust our online courses</h2>
                                            <p>
                                                Feugiat primis ligula risus auctor egestas augue mauri
                                                viverra tortor in iaculis placerat eugiat mauris ipsum in
                                                viverra gravida purus
                                            </p>
                                            <a
                                                href="categories-list.html"
                                                className="btn btn-md btn-rose tra-white-hover"
                                            >
                                                Discover More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li id="slide-2">
                        <img src="images/slider/slide-5.jpg" alt="slide-background" />
                        <div className="caption d-flex align-items-center center-align">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="caption-txt white-color">
                                            <h2>Learn our courses and earn new skills</h2>
                                            <p>
                                                Feugiat primis ligula risus auctor egestas augue mauri
                                                viverra tortor in iaculis placerat eugiat mauris ipsum in
                                                viverra gravida purus
                                            </p>
                                            <a
                                                href="pricing.html"
                                                className="btn btn-md btn-rose tra-white-hover"
                                            >
                                                Discover More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li id="slide-3">
                        <img src={slide6} alt="slide-background" />
                        <div className="caption d-flex align-items-center center-align">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="caption-txt white-color">
                                            <h2>2,769 online courses from the best tutors</h2>
                                            <p>
                                                Feugiat primis ligula risus auctor egestas augue mauri
                                                viverra tortor in iaculis placerat eugiat mauris ipsum in
                                                viverra gravida purus
                                            </p>
                                            <a
                                                href="courses-list.html"
                                                className="btn btn-md btn-rose tra-white-hover"
                                            >
                                                View All Courses
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Herosectiondivision;
