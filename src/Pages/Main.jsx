import React from 'react'
import { image2, gear, heartbeat, calculator, science, development, money, design, humanmind, trophy, classroom, mouse1, certificate, course1, course2, course3, course4, course5, course6, course7, course8, video1, crown, img04, img05, slide6, chip } from '../imgsource'
import Aboutsectiondivision from '../Components/Main/About_section_division'
import Herosectiondivision from '../Components/Main/Hero_section_division'
import Services_section_division from '../Components/Main/Services_section_division'
import Catergories_Section_Division from '../Components/Main/Catergories_Section_Division'
import Statistics_section_division from '../Components/Main/Statistics_section_division'
import Courses_section_division from '../Components/Main/Courses_section_division'
import Video_section_division from '../Components/Main/Video_section_division'
import Courses_section_division2 from '../Components/Main/Courses_section_division2'
import Banner_section_division from '../Components/Main/Banner_section_division'
import Courses_section_division3 from '../Components/Main/Courses_section_division3'
import Reviews_section_divion from '../Components/Main/Reviews_section_divion'
import Categories_section_division2 from '../Components/Main/Categories_section_division2'
import Pricingsectiondivision from '../Components/Main/Pricing_section_division'
import News_section_division from '../Components/Main/News_section_division'
import Bannersectiondivision2 from '../Components/Main/Banner_section_division2'


const Main = () => {
    return (<>
        <Herosectiondivision />
        <Aboutsectiondivision />
        <Services_section_division />
        <Catergories_Section_Division />
        <Statistics_section_division />
        <Courses_section_division />
        <Video_section_division />

        <Courses_section_division2 />

        <Banner_section_division />
        <>
        <Courses_section_division3 />
        </>

        <Reviews_section_divion />
        <Categories_section_division2 />
        <Pricingsectiondivision />
        <News_section_division />
        <Bannersectiondivision2 />
    </>
    )
}

export default Main
