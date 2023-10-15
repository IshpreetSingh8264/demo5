import React from 'react';

const BreadcrumbItem = ({ label, link }) => {
    return (
        <li className="breadcrumb-item">
            <a href={link}>{label}</a>
        </li>
    );
};

const Breadcrumb = () => {
    // Breadcrumb items
    const breadcrumbItems = [
        { label: 'Home', link: 'index.html' },
        { label: 'All Teachers', link: 'teachers-list.html' },
        { label: 'David Smith', link: '#' } 
    ];

    return (
        <div id="breadcrumb" className="division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                {breadcrumbItems.map((item, index) => (
                                    <BreadcrumbItem key={index} label={item.label} link={item.link} />
                                ))}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
