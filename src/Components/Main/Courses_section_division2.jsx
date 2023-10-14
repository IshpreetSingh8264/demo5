import React from 'react';
import { CourseData } from './courseData';  

const Courses_section_division2 = () => {
    return (
        <section id="courses-3" className="wide-60 courses-section division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title title-centered mb-60">
                            <h3 className="h3-sm">Highest Rated Online Courses</h3>
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta
                            </p>
                        </div>
                    </div>
                </div>
                {/* COURSES HOLDER */}
                <div className="row courses-grid">
                    {CourseData.map((Course, index) => (
                        <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                            <div className="cbox-1">
                                <a href={Course.link}>
                                    <img className="img-fluid" src={Course.image} alt="course-preview" />
                                    <div className="cbox-1-txt">
                                        <p className="course-tags">
                                            {Course.tags.map((tag, idx) => (
                                                <span key={idx}>{tag}</span>
                                            ))}
                                        </p>
                                        <h5 className="h5-xs">{Course.title}</h5>
                                        <div className="course-rating clearfix">
                                            {Array.from({ length: Course.rating }, (_, idx) => (
                                                <i key={idx} className="fas fa-star" />
                                            ))}
                                            <span>{`(${Course.numRatings} Ratings)`}</span>
                                        </div>
                                        <span className="course-price">
                                            {Course.price.oldPrice ? (
                                                <span className="old-price">{`$${Course.price.oldPrice}`}</span>
                                            ) : null}
                                            {` $${Course.price.currentPrice}`}
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {/* ALL COURSES BUTTON */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="all-courses-btn">
                            <a href="categories-list.html" className="btn btn-md btn-rose tra-black-hover">Browse All Courses</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Courses_section_division2;
