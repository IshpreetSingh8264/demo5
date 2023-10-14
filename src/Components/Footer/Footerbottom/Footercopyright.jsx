import React from 'react';

const Footercopyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="col-lg-8">
                <p className="footer-copyright">
                    © Copyright eTreeks {currentYear}. All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footercopyright;
