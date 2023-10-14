import React from 'react'

import Wsmobileheader from '../Components/Header/Wsmobileheader'
import Wsmainfullmenu from '../Components/Header/Wsmainfullmenu'

const Header = () => {
    return (
        <header id="header" className="header white-menu navbar-dark">
            <div className="header-wrapper">
                <Wsmobileheader />
                <Wsmainfullmenu />
            </div>
        </header>
    )
}

export default Header
