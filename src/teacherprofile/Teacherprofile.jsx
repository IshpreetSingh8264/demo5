import React from 'react'
import Header from '../Pages/Header'
import Footer from '../Pages/Footer'
import Html from './Html'

const Teacherprofile = () => {
  return (
    <div>
      <div id="loader-wrapper">
        <div id="loading">
          <div id="loading-center">
            <div class="cssload-loading"><i></i><i></i><i></i><i></i></div>
          </div>
        </div>
      </div>
      <Header />
      <Html />
      <Footer />
    </div>
  )
}

export default Teacherprofile
