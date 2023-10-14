import React from 'react';
import { img04, img05 } from '../../imgsource';

const BannerSectionDivision2 = () => {
    return (
        <section id="banner-5" className="bg-whitesmoke wide-60 banner-section division">
            <div className="container">
                <div className="row">
                    {/* BANNER TEXT */}
                    <div className="col-md-6">
                        <div className="banner-5-txt">
                            {/* Icon */}
                            <img src={img04} alt="banner-icon" />
                            {/* Text */}
                            <div className="b5-txt">
                                {/* Title */}
                                <h4 className="h4-xs">Become a Teacher</h4>
                                {/* Text */}
                                <p>
                                    Feugiat primis ligula a risus auctor egestas an augue mauri and viverra tortor
                                    iaculis an eugiat viverra
                                </p>
                                {/* Button */}
                                <a href="become-a-teacher.html" className="btn btn-rose tra-black-hover">
                                    Find Out More
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* END BANNER TEXT */}
                    {/* BANNER TEXT */}
                    <div className="col-md-6">
                        <div className="banner-5-txt">
                            {/* Icon */}
                            <img src={img05} alt="banner-icon" />
                            {/* Text */}
                            <div className="b5-txt">
                                {/* Title */}
                                <h4 className="h4-xs">eTreeks for Business</h4>
                                {/* Text */}
                                <p>
                                    Feugiat primis ligula a risus auctor egestas an augue mauri and viverra tortor
                                    iaculis an eugiat viverra
                                </p>
                                {/* Button */}
                                <a href="courses-list.html" className="btn btn-rose tra-black-hover">
                                    Find Out More
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* END BANNER TEXT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default BannerSectionDivision2;
