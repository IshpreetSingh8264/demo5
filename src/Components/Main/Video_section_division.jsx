import React from 'react';
import { video1 } from '../../imgsource';

const Video_section_division = () => {
    return (
        <section id="video-1" className="bg-lightgrey bg-map video-section division">
            <div className="container">
                <div className="video-1-holder">
                    <div className="row d-flex align-items-center">
                        {/* VIDEO LINK */}
                        <div className="col-md-6">
                            <div className="video-link text-center">
                                {/* Change the link HERE!!! */}
                                <div className="play-btn play-btn-rose text-center">
                                    <a className="video-popup3 video-play-button" href="https://www.youtube.com/embed/0gv7OC9L2s8">
                                        <span />
                                    </a>
                                    {/* Preview Image */}
                                    <img className="img-fluid" src={video1} alt="video-preview" />
                                </div>
                            </div>
                        </div> {/* END VIDEO LINK */}
                        {/* VIDEO TEXT */}
                        <div className="col-md-6">
                            <div className="video-txt">
                                {/* Title */}
                                <h4 className="h4-xl">Take the first step to knowledge with <span>eTreeks</span></h4>
                                {/* Text */}
                                <p className="p-md">
                                    Cursus porta, feugiat primis in ultrice ligula risus auctor tempus dolor feugiat,
                                    felis lacinia risus
                                </p>
                                {/* Button */}
                                <a href="courses-list.html" className="btn btn-rose tra-black-hover">
                                    Find Out More
                                </a>
                            </div>
                        </div> {/* END VIDEO TEXT */}
                    </div> {/* End row */}
                </div> {/* End video-1-holder */}
            </div> {/* End container */}
        </section>
    );
};

export default Video_section_division;
