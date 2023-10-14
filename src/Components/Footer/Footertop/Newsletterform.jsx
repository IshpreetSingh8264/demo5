import React from 'react'

const Newsletterform = () => {
    return (
    <div className="col-md-7 col-xl-3">
        <div className="footer-form mb-20">
            {/* Title */}
            <h5 className="h5-md">Stay in Touch</h5>
            {/* Newsletter Form Input */}
            <form className="newsletter-form">
                <div className="input-group">
                    <input type="email" autoComplete="off" className="form-control" placeholder="Your Email Address" required id="s-email" />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-rose tra-rose-hover">Subscribe</button>
                    </span>
                </div>
                {/* Newsletter Form Notification */}
                <label htmlFor="s-email" className="form-notification" />
            </form>
        </div>
    </div>
    )
}

export default Newsletterform
