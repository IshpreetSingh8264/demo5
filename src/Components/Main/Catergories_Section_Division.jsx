import React from 'react';
import {
    development,
    money,
    design,
    humanmind,
    trophy,
    classroom,
    chip,
    heartbeat,
    calculator,
    science,
    gear,
} from '../../imgsource';

const categoryData = [
    {
        icon: development,
        title: 'Computer Science',
        courseCount: 341,
        subcategories: [
            'Artificial Intelligence',
            'Internet of Things',
            'Algorithms & Data Structures',
            'Information',
            'Technology',
            'Blockchain & Cryptocurrency',
            'Quantum Computing',
            'Machine Learning',
            'DevOps',
            'Network & Security',
            'Core IT Skills',
        ],
    },

];

const Categories_Section_Division = () => {
    return (
        <section id="categories-4" className="wide-60 categories-section division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title title-centered mb-80">
                            <h3 className="h3-sm">Our Online Course Categories</h3>
                            <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus,
                                blandit posuere and ligula varius magna a porta
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {categoryData.map((category, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="c4-box">
                                <div className="c4-box-ico mb-15 clearfix">
                                    <div className="c4-ico bg-blue">
                                        <img src={category.icon} alt="category-icon" />
                                    </div>
                                    <h5 className="h5-md">{category.title}</h5>
                                    <p>{category.courseCount} Courses</p>
                                </div>
                                <div className="c4-box-txt">
                                    <ul className="c4-box-list">
                                        {category.subcategories.map((subcategory, subIndex) => (
                                            <li key={subIndex}>
                                                <a href="courses-list.html">{subcategory}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="all-courses-btn">
                            <a href="categories-list.html" className="btn btn-md btn-tra-grey rose-hover">
                                Browse All Courses
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories_Section_Division;
