import React from 'react';
import '../../../src/css/style.css';
import { testimonials } from './Testimonials';

const ReviewsSectionDivision = () => {
    return (
        <section id="reviews-1" className="bg-whitesmoke wide-100 reviews-section division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title title-centered mb-60">
                            <h3 className="h3-sm">Success Stories From Our Students</h3>
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero
                                tempus, blandit posuere and ligula varius magna a porta
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="owl-carousel owl-theme reviews-holder">
                            {testimonials.map((testimonial, index) => {
                                const rating = Math.min(5, Math.max(0, Math.round(testimonial.rating)));
                                const ratingStars = Array.from({ length: rating }, (_, i) => (
                                    <i key={i} className="fas fa-star" />
                                ));

                                return (
                                    <div key={index} className="review-1">
                                        <div className="quote-ico"><img src="images/left-quote.png" alt="quote-image" /></div>
                                        <p>{testimonial.quote}</p>
                                        <div className="review-1-author d-flex align-items-center">
                                            <div className="author-avatar">
                                                <img className="img-fluid" src={testimonial.avatar} alt="review-author-avatar" />
                                            </div>
                                            <div className="review-author">
                                                <div className="tst-rating">
                                                    {ratingStars}
                                                </div>
                                                <h5 className="h5-xs">{testimonial.author}</h5>
                                                <span>{testimonial.occupation}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReviewsSectionDivision;