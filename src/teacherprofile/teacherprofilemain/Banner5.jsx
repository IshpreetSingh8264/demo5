import React from 'react';
import { image4, image5 } from '../../imgsource';

const Banner5 = () => {
    return (
        <div className="container">
            <div className="row">
                {/* BANNER TEXT 1 */}
                <div className="col-md-6">
                    <div className="banner-5-txt">
                        {/* Icon */}
                        <img src={image4} alt="banner-icon" />
                        {/* Text */}
                        <div className="b5-txt">
                            {/* Title */}
                            <h4 className="h4-xs">Become a Teacher</h4>
                            {/* Text */}
                            <p>
                                Feugiat primis ligula a risus auctor egestas an augue mauri
                                and viverra tortor iaculis an eugiat viverra
                            </p>
                            {/* Button */}
                            <a href="become-a-teacher.html" className="btn btn-rose tra-black-hover">
                                Find Out More
                            </a>
                        </div>
                    </div>
                </div>
                {/* END BANNER TEXT 1 */}
                {/* BANNER TEXT 2 */}
                <div className="col-md-6">
                    <div className="banner-5-txt">
                        {/* Icon */}
                        <img src={image5} alt="banner-icon" />
                        {/* Text */}
                        <div className="b5-txt">
                            {/* Title */}
                            <h4 className="h4-xs">eTreeks for Business</h4>
                            {/* Text */}
                            <p>
                                Feugiat primis ligula a risus auctor egestas an augue mauri
                                and viverra tortor iaculis an eugiat viverra
                            </p>
                            {/* Button */}
                            <a href="courses-list.html" className="btn btn-rose tra-black-hover">
                                Find Out More
                            </a>
                        </div>
                    </div>
                </div>
                {/* END BANNER TEXT 2 */}
            </div>
            {/* End row */}
        </div>
    );
};

export default Banner5;
