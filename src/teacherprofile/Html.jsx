import React from 'react'
import { course1, course2, course3, image5, image4, team5 } from '../imgsource'
import Breadcrum from './teacherprofilemain/Breadcrum'
import Teamsection_division from './teacherprofilemain/Teamsection_division'
import Coursesection_division from './teacherprofilemain/Coursesection_division'
import Page_pagination_division from './teacherprofilemain/Page_pagination_division'
import Banner5 from './teacherprofilemain/Banner5'


const Html = () => {
    return (
        <>

            <div id="page" className="page">

                <div className="inner-page-wrapper">
                    {/* BREADCRUMB
				============================================= */}
                    <Breadcrum />
                    {/* END BREADCRUMB */}
                    {/* TEAM-3
				============================================= */}
                    <Teamsection_division />
                    {/* END TEAM-3 */}
                    {/* COURSES-3
				============================================= */}
                    <Coursesection_division />
                    {/* END COURSES-3 */}
                    {/* PAGE PAGINATION
				============================================= */}
                    <Page_pagination_division />
                    {/* END PAGE PAGINATION */}
                    {/* BANNER-5
				============================================= */}
                    <section id="banner-5" className="bg-whitesmoke wide-60 banner-section division">
                        <Banner5 />
                    </section>

                </div>
            </div>

        </>

    )
}

export default Html
