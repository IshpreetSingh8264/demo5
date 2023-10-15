import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Demo5 = () => {
    return (
        <div>
            <div id="loader-wrapper">
                <div id="loading">
                    <div id="loading-center">
                        <div className="cssload-loading">
                            <i />
                            <i />
                            <i />
                            <i />
                        </div>
                    </div>
                </div>
            </div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Demo5
