import React from 'react'
import { logopng, } from '../imgsource'
import Footercontacts from '../Components/Footer/Footertop/Footercontacts'
import Footerlinks from '../Components/Footer/Footertop/Footerlinks'
import Footerlinks2 from '../Components/Footer/Footertop/Footerlinks2'
import Newsletterform from '../Components/Footer/Footertop/Newsletterform'
import Footercopyright from '../Components/Footer/Footerbottom/Footercopyright'
import Footersociallinks from '../Components/Footer/Footerbottom/Footersociallinks'


const Footer = () => {
    return (
        <div>
            <footer id="footer-3" className="footer division">
                <div className="container">
                    <div className="row">
                        {/* FOOTER CONTACTS */}
                        <Footercontacts />
                        {/* FOOTER LINKS */}
                        <Footerlinks />
                        {/* FOOTER LINKS */}
                        <Footerlinks2 />
                        {/* FOOTER NEWSLETTER FORM */}
                        <Newsletterform />
                    </div>

                    <div className="bottom-footer">
                        <div className="row">
                            {/* FOOTER COPYRIGHT */}
                            <Footercopyright />
                            {/* FOOTER SOCIALS LINKS */}
                            <Footersociallinks />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
