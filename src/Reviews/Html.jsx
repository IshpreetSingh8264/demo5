import React from 'react'
import { banner3, reviewauthor1 } from '../imgsource'
import Breadcrumb from './reviewspagecomponents/Breadcrumb'
import Reviews from './reviewspagecomponents/Reviews'
import Banner3 from './reviewspagecomponents/Banner3'
import Page_pagination_division from './reviewspagecomponents/Page_pagination_division'

const Html = () => {
    return (
        <div>
            <>
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

                <div id="page" className="page">

                    <div className="inner-page-wrapper">

                        <Breadcrumb />

                        <Reviews />

                        <Page_pagination_division />

                        <Banner3 />


                    </div>
                </div>

            </>

        </div>
    )
}

export default Html
