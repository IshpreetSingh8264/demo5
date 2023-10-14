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

const Wsmobileheader = () => {
    return (
        <div>
            <div className="wsmobileheader clearfix">
                <a id="wsnavtoggle" className="wsanimated-arrow"><span /></a>
                <span className="smllogo smllogo-black"><img src={logopng} width={172} height={40} alt="mobile-logo" /></span>
                <span className="smllogo smllogo-white"><img src="/image/Images/logo-white.png" width={172} height={40} alt="mobile-logo" /></span>
            </div>
        </div>
    )
}

export default Wsmobileheader
