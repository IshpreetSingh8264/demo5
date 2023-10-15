import React from 'react';
import { reviewauthor1 } from '../../imgsource';

const Testimonial = ({ text, author, role, stars }) => {
    return (
        <div className="review-2 masonry-item">
            <div className="review-2-txt">
                <p>{text}</p>
                <div className="review-2-author d-flex align-items-center">
                    <div className="author-avatar">
                        <img className="img-fluid" src={reviewauthor1} alt="review-author-avatar" />
                    </div>
                    <div className="review-author">
                        <div className="tst-rating">
                            {Array.from({ length: stars }, (_, index) => (
                                <i key={index} className="fas fa-star" />
                            ))}
                        </div>
                        <h5 className="h5-xs">{author}</h5>
                        <span>{role}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Reviews = () => {
    const testimonials = [
        {
            text:
                'Etiam sapien a sagittis congue and augue massa varius egestas a suscipit magna tempus aliquet porta magna ipsum and mauris placerat a feugiat primis integer auctor cursus euismod at purus pretium efficitur ipsum orci ligula cubilia laoreet magna',
            author: 'Jim M.',
            role: 'Software Engineer',
            stars: 5,
        },
        {
            text:
                'Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur dapibus and libero quisque tristique neque phasellus blandit tristique justo aliquam justo suscipit in magna dignissim',
            author: 'Jennifer',
            role: 'Graphic Designer',
            stars: 4.5,
        },
        {
            text:
                'Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum a porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales',
            author: 'Joel Peterson',
            role: 'Online Student',
            stars: 5,
        },
        {
            text:
                'In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate mullam molestie bibendum quis, aliquet an elementum massa ut sagittis. Aliqum mullam blandit tempor sapien gravida donec ipsum porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec an enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec',
            author: 'Michael Deal',
            role: 'UX Designer',
            stars: 5,
        },
        {
            text:
                'Payment data vitae auctor a congue magna tempor sapien eget gravida laoreet turpis urna augue, viverra an augue eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec, dictum tempor',
            author: 'Mark Paterson',
            role: 'Networking Student',
            stars: 4,
        },
        {
            text:
                'Ut non mauris libero. Sed consequat posuere nunc, eu porttitor neque dignissim nec. Donec bibendum sodales elit eu blandit. Suspendisse at finibus metus. Integer nulla pulvinar commodo nec, pulvinar sed nisi. Sed augue turpis, mollis a vehicula ornare, dapibus. Mauris donec ociis et magnis sapien sagittis',
            author: 'David L.',
            role: 'WordPress Student',
            stars: 4.5,
        },
        {
            text:
                'Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit at tristique justo ut aliquam vitae molestie nunc sapien justo, aliquet purus molestie venenatis aliquam eget lacinia elit',
            author: 'Aaron Wall',
            role: 'Online Student',
            stars: 5,
        },
        {
            text:
                'Etiam sapien a sagittis congue and augue massa varius egestas a suscipit magna tempus aliquet porta magna ipsum and mauris placerat a feugiat primis integer auctor cursus euismod at purus pretium efficitur ipsum orci ligula cubilia laoreet magna',
            author: 'Andre Wisdom',
            role: 'PHP Student',
            stars: 4.5,
        },
    ];

    return (
        <div>
            <section id="reviews-2" className="wide-60 reviews-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 reviews-grid">
                            <div className="masonry-wrap grid-loaded">
                                {testimonials.map((testimonial, index) => (
                                    <Testimonial key={index} {...testimonial} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;
