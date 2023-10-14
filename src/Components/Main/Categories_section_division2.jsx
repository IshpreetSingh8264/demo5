import React from 'react';

const CategoryBox = ({ title, link, courseCount }) => (
    <div className="c1-box">
        <a href={link}>
            <div className="c1-box-txt">
                <h5 className="h5-xs">{title}</h5>
                <p>{courseCount} Courses</p>
            </div>
        </a>
    </div>
);

const CategoriesSectionDivision = () => {
    const categories = [
        { title: 'Development', link: 'category-details.html', courseCount: 36 },
        { title: 'Finance & Accounting', link: 'category-details.html', courseCount: 28 },
        { title: 'IT & Software', link: 'category-details.html', courseCount: 54 },
        { title: 'Office Productivity', link: 'category-details.html', courseCount: 68 },
        { title: 'Photography', link: 'category-details.html', courseCount: 159 },
        { title: 'Design & Arts', link: 'category-details.html', courseCount: 78 },
        { title: 'Languages', link: 'category-details.html', courseCount: 103 },
        { title: 'Sciences & Math', link: 'category-details.html', courseCount: 45 },
        { title: 'Writing & Journalism', link: 'category-details.html', courseCount: 39 },
        { title: 'Health and Fitness', link: 'category-details.html', courseCount: 62 },
        // Add more categories here if needed
    ];

    return (
        <section id="categories-1" className="categories-section division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-40">
                            <h4 className="h4-xs">Most Popular Categories of 2019</h4>
                            <p className="p-md">Discover thousands of online courses from the best experts</p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col text-center">
                        {categories.map((category, index) => (
                            <CategoryBox key={index} title={category.title} link={category.link} courseCount={category.courseCount} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSectionDivision;
