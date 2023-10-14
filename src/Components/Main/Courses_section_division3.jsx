import React from 'react';
<link href="./src/css/style.css" rel="stylesheet" />

const CourseItem = ({ title, hours, rating, users, price, oldPrice }) => {
    return (
        <div className="cbox-5 b-bottom">
            <a href="course-details.html">
                <div className="row">
                    <div className="col-sm-7 cbox-5-txt">
                        <h5 className="h5-xs">{title}</h5>
                        <p className="p-sm grey-color">{hours}</p>
                        <div className="course-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <span className="cr-rating">{rating}</span>
                        </div>
                    </div>
                    <div className="col-sm-3 cbox-5-data text-center clearfix">
                        <p className="grey-color">
                            <i className="fas fa-users" /> {users}
                        </p>
                    </div>
                    <div className="col-sm-2 cbox-5-price text-right clearfix">
                        <span className="course-price">{price}</span>
                        <span className="old-price">{oldPrice}</span>
                    </div>
                </div>
            </a>
        </div>
    );
};

const CourseList = ({ courses }) => {
    return (
        <div className="col-lg-6">
            {courses.map((course, index) => (
                <CourseItem key={index} {...course} />
            ))}
        </div>
    );
};

const CoursesSectionDivision3 = () => {
    const coursesData = [
        {
            title: 'Diploma in Basic English Grammar - Revised 2020',
            hours: '11 Total Hours - Updated 2/2020',
            rating: '4.89 (31 Reviews)',
            users: '7348',
            price: '$64.99',
            oldPrice: '$119.99',
        },
        {
            title: 'Diploma in Information Technology Management',
            hours: '8 Total Hours - Updated 12/2019',
            rating: '4.19 (76 Reviews)',
            users: '12035',
            price: '$29.99',
            oldPrice: '$69.99',
        },
        {
            title: 'Wordpress for Beginners - Master Wordpress Quickly',
            hours: '23 Total Hours - Updated 01/2020',
            rating: '4.15 (58 Ratings)',
            users: '10651',
            price: '$44.99',
            oldPrice: '$74.99',
        },
        {
            title: 'Instagram Marketing 2020: A Step-By-Step to 10,000 Followers',
            hours: '19 Total Hours - Updated 2/2020',
            rating: '4.08 (164 Reviews)',
            users: '15491',
            price: '$39.99',
            oldPrice: '$84.99',
        },
        {
            title: 'Computer Networking - Wired & Wireless Networks',
            hours: '36 Total Hours - Updated 12/2019',
            rating: '4.79 (117 Reviews)',
            users: '17035',
            price: '$49.99',
            oldPrice: '$99.99',
        },
        {
            title: 'Diesel Engine Cycles, Maintenance, & Control',
            hours: '24 Total Hours - Updated 11/2019',
            rating: '4.42 (82 Ratings)',
            users: '8163',
            price: '$32.99',
            oldPrice: '$62.99',
        },
    ];


    return (
        <section id="courses-5" className="courses-section division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title title-centered mb-60">
                            <h3 className="h3-sm">Best Online Courses of All-Time</h3>
                            <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                                primis libero tempus, blandit posuere and ligula varius magna a
                                porta
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <CourseList courses={coursesData} />
                </div>
            </div>
        </section>
    );
};

export default CoursesSectionDivision3;
