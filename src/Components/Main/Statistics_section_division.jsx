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

const Statistics_section_division = () => {
    return (
        <div id="statistic-2" className="bg-01 statistic-section division">
            <div className="container white-color">
                <div className="row">
                    {/* STATISTIC BLOCK #1 */}
                    <div className="col-sm-6 col-md-3">
                        <div className="statistic-block text-center">
                            <h5 className="statistic-number">
                                2,<span className="count-element">769</span>
                            </h5>
                            <p className="p-md">Online Courses</p>
                        </div>
                    </div>
                    {/* STATISTIC BLOCK #2 */}
                    <div className="col-sm-6 col-md-3">
                        <div className="statistic-block text-center">
                            <h5 className="statistic-number">
                                <span className="count-element">637</span>
                            </h5>
                            <p className="p-md">Free Tutorials</p>
                        </div>
                    </div>
                    {/* STATISTIC BLOCK #3 */}
                    <div className="col-sm-6 col-md-3">
                        <div className="statistic-block text-center">
                            <h5 className="statistic-number">
                                <span className="count-element">942</span>
                            </h5>
                            <p className="p-md">eBooks Available</p>
                        </div>
                    </div>
                    {/* STATISTIC BLOCK #4 */}
                    <div className="col-sm-6 col-md-3">
                        <div className="statistic-block text-center">
                            <h5 className="statistic-number">
                                9,<span className="count-element">986</span>
                            </h5>
                            <p className="p-md">Happy Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics_section_division;
