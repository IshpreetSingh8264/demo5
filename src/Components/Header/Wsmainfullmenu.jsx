import React from 'react'
import {
    logopng,
    featurednews,
    flagiconrussia,
    flagiconchina,
    flagicongermany,
    flagiconspain,
    flagiconfrance,
    flagiconitaly,
    flagiconen,
    latestpost1,
    latestpost2,
    latestpost3
} from '../../imgsource';
import { Link } from 'react-router-dom';
import Routes from '../../Routes';

const Wsmainfullmenu = () => {
    return (
        <div>
            <div className="wsmainfull menu clearfix">
                <div className="wsmainwp clearfix">
                    <div className="desktoplogo"><Link to="/" className="logo-black"><img src={logopng} width={172} height={40} alt="header-logo" /></Link></div>
                    <div className="desktoplogo"><a href="#hero-5" className="logo-white"><img src="images/logo-white.png" width={172} height={40} alt="header-logo" /></a></div>
                    <nav className="wsmenu clearfix">
                        <ul className="wsmenu-list">
                            <li className="nl-simple" aria-haspopup="true"><a href="#">About</a></li>
                            <li aria-haspopup="true"><a href="#">Pages <span className="wsarrow" /></a>
                                <div className="wsmegamenu clearfix halfmenu">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <ul className="col-lg-6 col-md-12 col-xs-12 link-list left-link-list">
                                                <li><a href="about.html">About Us Page</a></li>
                                                <li><a href="categories-list.html">Categories Listing</a></li>
                                                <li><a href="category-details.html">Category Details</a></li>
                                                <li><a href="courses-list.html">Courses Listing</a></li>
                                                <li><a href="course-details.html">Course Details</a></li>
                                                <li><a href="teachers-list.html">Teachers Listing</a></li>
                                                <li><Link to="/demo5/teacher-profile">Teacher Profile</Link></li>
                                            </ul>
                                            <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                                <li><a href="become-a-teacher.html">Become A Teacher</a></li>
                                                <li><a href="pricing.html">Pricing Plans Page</a></li>
                                                <li><Link to="/demo5/reviews">Reviews</Link></li>
                                                <li><a href="faqs.html">FAQs Page</a></li>
                                                <li><a href="blog-listing.html">Blog Listing</a></li>
                                                <li><a href="single-post.html">Single Post</a></li>
                                                <li><a href="contacts.html">Contacts Page</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li aria-haspopup="true"><a href="#">Categories <span className="wsarrow" /></a>
                                <ul className="sub-menu">
                                    <li aria-haspopup="true"><a href="courses-list.html">Development</a></li>
                                    <li aria-haspopup="true"><a href="courses-list.html">Finance &amp; Accounting</a>
                                    </li>
                                    <li aria-haspopup="true"><a href="courses-list.html">IT &amp; Software</a></li>
                                    <li aria-haspopup="true"><a href="courses-list.html">Office Productivity</a>
                                    </li>
                                    <li aria-haspopup="true"><a href="courses-list.html">Photography</a></li>
                                    <li aria-haspopup="true"><a href="courses-list.html">Math &amp; Science</a></li>
                                    <li aria-haspopup="true"><a href="courses-list.html">Languages</a></li>
                                    <li aria-haspopup="true"><a href="courses-list.html">Marketing</a></li>
                                    <li aria-haspopup="true"><a href="courses-list.html">Health &amp; Fitness</a></li>
                                </ul>
                            </li>
                            <li aria-haspopup="true"><a href="#">Mega Menu <span className="wsarrow" /></a>
                                <div className="wsmegamenu clearfix">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-3">
                                                <h3 className="title">Top 5 Online Courses:</h3>
                                                <ul className="link-list clearfix">
                                                    <li><a href="course-details.html">English for Tourism</a></li>
                                                    <li><a href="course-details.html">Python Programming - Working
                                                        with Lists and Files</a></li>
                                                    <li><a href="course-details.html">Computer Networking - Wired
                                                        and Wireless Networks</a></li>
                                                    <li><a href="course-details.html">Digital Marketing: The
                                                        Ultimate Guide to Strategic</a></li>
                                                    <li><a href="course-details.html">The Complete iOS 10 &amp; Swift 3
                                                        Developer Course</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12 col-lg-5">
                                                <h3 className="title">Featured News:</h3>
                                                <div className="fluid-width-video-wrapper mb-15"><img src={featurednews} alt="featured-news" />
                                                </div>
                                                <h5 className="h5-md">
                                                    <a href="single-post.html">Study smart and save time with these
                                                        5 tips
                                                    </a>
                                                </h5>
                                                <p className="wsmwnutxt">Porta semper lacus cursus, feugiat primis
                                                    ultrice in ligula risus auctor
                                                    tempus feugiat dolor impedit magna...
                                                </p>
                                            </div>
                                            <div className="col-md-12 col-lg-4">
                                                <h3 className="title">Latest News:</h3>
                                                <ul className="latest-news">
                                                    <li className="clearfix d-flex align-items-center">
                                                        <img className="img-fluid" src={latestpost1} alt="blog-post-preview" />
                                                        <div className="post-summary">
                                                            <a href="single-post.html">Etiam sapien risus ante
                                                                auctor tempus an accumsan...</a>
                                                            <p>18 hours ago</p>
                                                        </div>
                                                    </li>
                                                    <li className="clearfix d-flex align-items-center">
                                                        <img className="img-fluid" src={latestpost2} alt="blog-post-preview" />
                                                        <div className="post-summary">
                                                            <a href="single-post.html">Blandit tempor sapien ipsum,
                                                                porta risus auctor justo...
                                                            </a>
                                                            <p>Feb 17, 2020</p>
                                                        </div>
                                                    </li>
                                                    <li className="clearfix d-flex align-items-center">
                                                        <img className="img-fluid" src={latestpost3} alt="blog-post-preview" />
                                                        <div className="post-summary">
                                                            <a href="single-post.html">Cursus risus an auctor risus
                                                                laoreet undo auctor varius...</a>
                                                            <p>Feb 07, 2020</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nl-simple" aria-haspopup="true"><a href="blog-listing.html">Blog</a></li>
                            <li className="nl-simple" aria-haspopup="true"><a href="contacts.html">Contacts</a></li>
                            <li aria-haspopup="true">
                                <a href="#" className="lang-select">
                                    <img src={flagiconen} alt="flag-icon" /> En <span className="wsarrow" />
                                </a>
                                <ul className="sub-menu last-sub-menu">
                                    <li aria-haspopup="true"><a href="#"><img src={flagicongermany} alt="flag-icon" /> Deutch</a></li>
                                    <li aria-haspopup="true"><a href="#"><img src={flagiconspain} alt="flag-icon" /> Español</a></li>
                                    <li aria-haspopup="true"><a href="#"><img src={flagiconfrance} alt="flag-icon" /> Français</a></li>
                                    <li aria-haspopup="true"><a href="#"><img src={flagiconitaly} alt="flag-icon" /> Italiano</a></li>
                                    <li aria-haspopup="true"><a href="#"><img src={flagiconrussia} alt="flag-icon" /> Русский</a></li>
                                    <li aria-haspopup="true"><a href="#"><img src={flagiconchina} alt="flag-icon" /> 简体中文</a></li>
                                </ul>
                            </li>
                            <li className="nl-simple" aria-haspopup="true">
                                <a href="#" className="btn btn-rose tra-black-hover last-link">Get Started</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Wsmainfullmenu
