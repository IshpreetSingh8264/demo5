import React from 'react'

const Footerlinks = () => {
    return (
        <div className="col-md-3 col-lg-3 col-xl-3">
            <div className="footer-links mb-40">
                {/* Title */}
                <h5 className="h5-md">Quick Links</h5>
                {/* Footer Links */}
                <ul className="foo-links clearfix">
                    <li><a href="about.html">About eTreeks</a></li>
                    <li><a href="categories-list.html">Courses Catalog</a></li>
                    <li><a href="reviews.html">Our Testimonials</a></li>
                    <li><a href="pricing.html">Premium Learning</a></li>
                    <li><a href="blog-listing.html">From the Blog</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footerlinks
