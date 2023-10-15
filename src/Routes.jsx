import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Teacherprofile from './teacherprofile/Teacherprofile';
import Demo5 from './Pages/Demo5';
import Reviews from './Reviews/Reviews';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/demo5/teacher-profile" element={<Teacherprofile />} />
            <Route path="/demo5" element={<Demo5/>} />
            <Route path="/" element={<Demo5/>} />
            <Route path="/demo5/reviews" element={<Reviews/>} />
            
        </Routes>
    );
};

export default AppRoutes;
