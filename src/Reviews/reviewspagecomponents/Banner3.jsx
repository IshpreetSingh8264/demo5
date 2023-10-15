import React from 'react';
import { banner3 } from '../../imgsource';

const Banner3 = ({ title, link }) => {
    return (
        <section id="banner-3" className="bg-lightgrey bg-map banner-section division">
            <div className="container">
                <div className="banner-3-holder bg-lightdark">
                    <div className="row d-flex align-items-center">
                        {/* BANNER IMAGE */}
                        <div className="col-lg-8">
                            <div className="banner-3-img">
                                <img className="img-fluid" src={banner3} alt="banner-image" />
                            </div>
                        </div>
                        {/* END BANNER IMAGE */}
                        {/* BANNER TEXT */}
                        <div className="col-lg-4">
                            <div className="banner-3-txt white-color">
                                {/* Title */}
                                <h4 className="h4-xs">{title}</h4>
                                {/* Button */}
                                <a href={link} className="btn btn-rose tra-white-hover">
                                    Find Out More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Banner3Example = () => {
    return (
        <div>
            <Banner3
                title="Learn something new every day with eTreeks"
                link="courses-list.html"
            />
        </div>
    );
};

export default Banner3Example;
