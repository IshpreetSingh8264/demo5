import React from 'react';
import {
    course1,
    course2,
    course3,
    course4,
    course5,
    course6,
    course7,
    course8,
} from '../../imgsource';

const coursesData = [
    {
        img: course1,
        title: 'Beginner Level English - Foundations',
        tags: ['Languages', 'English'],
        rating: 4.5,
        ratingsCount: 26,
        price: 138.99,
        oldPrice: 149.99,
    },
    {
        img: course2,
        title: 'Diploma in Basic English Grammar - Revised 2019',
        tags: ['Languages', 'English'],
        rating: 5,
        ratingsCount: 118,
        price: 59.99,
        oldPrice: 174.99,
    },
    {
        img: course3,
        title: 'The Complete Cyber Security Course: End Point Protection!',
        tags: ['Network Security'],
        rating: 4.5,
        ratingsCount: 72,
        price: 34.99,
        oldPrice: 119.99,
    },
    {
        img: course4,
        title: 'Google AdWords for Beginners 2020',
        tags: ['SEO', 'Marketing'],
        rating: 5,
        ratingsCount: 281,
        price: 0,
        oldPrice: 0,
    },
    {
        img: course5,
        title: 'Wordpress for Beginners - Master Wordpress Quickly',
        tags: ['Design', 'WordPress'],
        rating: 4.15,
        ratingsCount: 58,
        price: 62.99,
        oldPrice: 194.99,
    },
    {
        img: course6,
        title: 'Excel Essentials: The Complete Excel Series - Level 1 & 2',
        tags: ['Software', 'Productivity'],
        rating: 5,
        ratingsCount: 31,
        price: 45.99,
        oldPrice: 149.99,
    },
    {
        img: course7,
        title: 'Landing Page Design & Conversion Rate Optimization 2020',
        tags: ['Web Design', 'HTML 5'],
        rating: 4.8,
        ratingsCount: 74,
        price: 23.99,
        oldPrice: 109.99,
    },
    {
        img: course8,
        title: 'Instagram Marketing 2020: A Step-By-Step to 10,000 Followers',
        tags: ['Internet', 'Marketing'],
        rating: 5,
        ratingsCount: 374,
        price: 33.99,
        oldPrice: 169.99,
    },
];

const Courses_section_division = () => {
    return (
        <section id="courses-1" className="wide-100 courses-section division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title title-centered mb-60">
                            <h3 className="h3-sm">Best Online Courses of 2019</h3>
                            <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta
                            </p>
                            <div className="title-btn">
                                <a href="courses-list.html" className="btn btn-rose tra-grey-hover">
                                    View All Courses
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* COURSE BOXES CAROUSEL */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="owl-carousel owl-theme owl-loaded courses-carousel">
                            {coursesData.map((course, index) => (
                                <div key={index} className="cbox-1">
                                    <a href="course-details.html">
                                        <img className="img-fluid" src={course.img} alt="course-preview" />
                                        <div className="cbox-1-txt">
                                            <p className="course-tags">
                                                {course.tags.map((tag, index) => (
                                                    <span key={index}>{tag}</span>
                                                ))}
                                            </p>
                                            <h5 className="h5-xs">{course.title}</h5>
                                            <div className="course-rating clearfix">
                                                {Array.from({ length: Math.floor(course.rating) }, (_, index) => (
                                                    <i key={index} className="fas fa-star" />
                                                ))}
                                                {course.rating % 1 !== 0 && <i className="fas fa-star-half-alt" />}
                                                <span>{`${course.rating} (${course.ratingsCount} Ratings)`}</span>
                                            </div>
                                            <span className="course-price">
                                                <span className="old-price">{`$${course.oldPrice}`}</span>
                                                {` $${course.price}`}
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> {/* END COURSES BOXES CAROUSEL */}
            </div> {/* End container */}
        </section>
    );
};

export default Courses_section_division;
