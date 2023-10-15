import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            const isCurrent = currentPage === i;
            pageNumbers.push(
                <li key={i} className={`page-item ${isCurrent ? 'active' : ''}`}>
                    <a
                        className="page-link"
                        href="#"
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                        {isCurrent && <span className="sr-only">(current)</span>}
                    </a>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a
                        className="page-link"
                        href="#"
                        tabIndex={-1}
                        onClick={() => onPageChange(currentPage - 1)}
                    >
                        <i className="fas fa-angle-left" />
                    </a>
                </li>
                {renderPageNumbers()}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <a
                        className="page-link"
                        href="#"
                        onClick={() => onPageChange(currentPage + 1)}
                    >
                        <i className="fas fa-angle-right" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

const Page_pagination_division = () => {
    // Mock data for demonstration, replace with actual data
    const totalPages = 4;
    const currentPage = 1;

    const handlePageChange = (page) => {
        // Implement logic to handle page change (e.g., fetch data for the new page)
        console.log('Page changed to:', page);
    };

    return (
        <div className="page-pagination division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page_pagination_division;
