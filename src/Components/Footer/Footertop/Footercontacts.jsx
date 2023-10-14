import React from 'react'
import { logopng } from '../../../imgsource'

const Footercontacts = () => {
    return (

        <div className="col-md-5 col-lg-5 col-xl-3">
            <div className="footer-box mb-40">
                {/* Footer Logo */}
                {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
                <img src={logopng} width={172} height={40} alt="footer-logo" />
                {/* Address */}
                <p className="mt-25">121 King Street, Melbourne,</p>
                <p>Victoria 3000 Australia</p>
                {/* Phone */}
                <p>Phone: +12 9 8765 4321</p>
                {/* Email */}
                <p className="foo-email">Email: <a href="mailto:yourdomain@mail.com">hello@domen.com</a></p>
            </div>
        </div>

    )
}

export default Footercontacts
