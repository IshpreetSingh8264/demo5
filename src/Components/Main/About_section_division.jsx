import React from 'react';
import { image2 } from '../../imgsource';

const Aboutsectiondivision = () => {
    return (
        <section id="about-3" className="pt-100 about-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-6">
                        <div className="txt-block pc-25">
                            <h3 className="h3-sm">Learn new personal &amp; professional skills online</h3>
                            <p>
                                An enim nullam tempor sapien gravida donec porta and blandit ipsum enim justo integer
                                velna vitae
                                auctor integer congue magna and purus pretium risus ligula rutrum luctus ultrice
                            </p>
                            <ul className="txt-list mb-15">
                                <li>Nullam rutrum eget nunc varius etiam mollis risus undo</li>
                                <li>
                                    Integer congue magna at pretium purus pretium ligula at rutrum risus luctus dolor
                                    auctor ipsum blandit purus
                                </li>
                                <li>Risus at congue etiam aliquam sapien egestas posuere</li>
                            </ul>
                            <a href="categories-list.html" className="btn btn-md btn-rose tra-black-hover">
                                Start Learning Now
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-6">
                        <div className="img-block">
                            <img className="img-fluid" src={image2} alt="about-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutsectiondivision;
