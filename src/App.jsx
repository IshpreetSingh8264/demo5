import React from 'react'
import { logopng, image2, gear, featurednews, flagiconrussia, course1, chip, heartbeat, calculator, science, flagiconchina, development, money, design, humanmind, trophy, classroom, mouse1, certificate, flagicongermany, flagiconspain, flagiconfrance, flagiconitaly, flagiconen, latestpost1, latestpost2, latestpost3, course2, course3, course4, course5, course6, course7, course8, video1, crown, img04, img05, slide6 } from './imgsource'
import Header from './Pages/Header'
import Main from './Pages/Main'
import Footer from './Pages/Footer'



const App = () => {
  return (
    <div>


      
      <div id="loader-wrapper">
      <div id="loading">
        <div id="loading-center">
          <div className="cssload-loading"><i /><i /><i /><i /></div>
        </div>
      </div>
    </div>

      <div id="page" className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>

  )
}

export default App
