import React from 'react';

const PagePaginationDivision = () => {
    return (
        <div className="page-pagination division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex={-1}>
                                        <i className="fas fa-angle-left" />
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">
                                        1 <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        4
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="fas fa-angle-right" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagePaginationDivision;
