import React from 'react';
import { course1, course2, course3 } from '../../imgsource';

const CourseCard = ({ id, image, tags, title, rating, price }) => {
    return (
        <div id={`c3-${id}`} className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
                <a href="course-details.html">
                    <img
                        className="img-fluid"
                        src={image}
                        alt="course-preview"
                    />
                    <div className="cbox-1-txt">
                        <p className="course-tags">
                            {tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </p>
                        <h5 className="h5-xs">{title}</h5>
                        <div className="course-rating clearfix">
                            {[...Array(Math.floor(rating))].map((_, index) => (
                                <i key={index} className="fas fa-star" />
                            ))}
                            {rating % 1 !== 0 && <i className="fas fa-star-half-alt" />}
                            <span>{rating} Ratings</span>
                        </div>
                        <span className="course-price">
                            {price.oldPrice && (
                                <span className="old-price">${price.oldPrice}</span>
                            )}
                            ${price.newPrice}
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
};

const CoursesectionDivision = () => {
    const courses = [
        {
            id: 1,
            image: course1,
            tags: ['Languages', 'English'],
            title: 'Beginner Level English - Foundations',
            rating: 4.5,
            price: { oldPrice: '149.99', newPrice: '138.99' }
        },
        {
            id: 2,
            image: course2,
            tags: ['Languages', 'English'],
            title: 'Diploma in Basic English Grammar - Revised 2019',
            rating: 5.0,
            price: { oldPrice: '174.99', newPrice: '59.99' }
        },
        {
            id: 3,
            image: course3,
            tags: ['Network Security'],
            title: 'The Complete Cyber Security Course: End Point Protection!',
            rating: 4.5,
            price: { oldPrice: '119.99', newPrice: '34.99' }
        },
        {
            id: 4,
            image: course3,
            tags: ['SEO', 'Marketing'],
            title: 'Google AdWords for Beginners 2020',
            rating: 5.0,
            price: { newPrice: 'Free Course' }
        },
    ];

    return (
        <section id="courses-3" className="pt-80 pb-60 courses-section division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-40">
                            <h5 className="h5-xl">My Courses ({courses.length})</h5>
                        </div>
                    </div>
                </div>
                <div className="row courses-grid">
                    {courses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesectionDivision;
