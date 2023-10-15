import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
    return (
        <div>
            <div id="breadcrumb" className="division">
                <div className="container">
                    <div className="row">
                        {/* BREADCRUMB NAV */}
                        <div className="col-md-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Reviews
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </div>
        </div>
    )
}

export default Breadcrumb
