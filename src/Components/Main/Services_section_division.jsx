import React from 'react';
import {
    trophy,
    classroom,
    mouse1,
    certificate,
} from '../../imgsource';

const serviceItems = [
    {
        icon: trophy,
        title: 'Trusted Content',
        description: 'Augue luctus neque purus ipsum neque dolor primis libero tempus a blandit',
    },
    {
        icon: classroom,
        title: 'Certified Teachers',
        description: 'Augue luctus neque purus ipsum neque dolor primis libero tempus a blandit',
    },
    {
        icon: mouse1,
        title: 'Lifetime Access',
        description: 'Augue luctus neque purus ipsum neque dolor primis libero tempus a blandit',
    },
    {
        icon: certificate,
        title: 'Certification',
        description: 'Augue luctus neque purus ipsum neque dolor primis libero tempus a blandit',
    },
];

const Services_section_division = () => {
    return (
        <section id="services-2" className="bg-lightgrey wide-60 services-section division">
            <div className="container">
                <div className="row">
                    {serviceItems.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-3">
                            <div className="sbox-2">
                                <img className="img-75" src={item.icon} alt="service-icon" />
                                <div className="sbox-2-txt">
                                    <h5 className="h5-md">{item.title}</h5>
                                    <p className="grey-color">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services_section_division;
