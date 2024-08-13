import React, { useEffect, useState } from 'react'
import './Styles/Global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import Loader from './Components/Loader'
import { stylesVariables } from './Styles/Variables';
import './Styles/Global.css';
import CookieConsent from "react-cookie-consent";
import Privacy from './Components/Privacy'
import { animate} from 'motion'


function App() {

  useEffect(() => {
    animate('#vinyl', { rotate: [0, 360] }, { duration: 1, easing: 'linear', repeat: Infinity })
    // timeline([
    //   [animate('#vinyl', {x: [-1000, 75] }, { duration: 1, easing: 'ease-in-out' })],
    //   [animate('#bedmar', {x: [1000, 0] }, { duration: 2, easing: 'ease-in-out' })],
    // ])
  })

  const { primaryText,
    // background
    secondary
  } = stylesVariables
  const [loading, setLoading] = useState(true)
  const [isSmallScreen, setIsSmallScreen] = useState(false)


  const [isOpen, setIsOpen] = useState(false)
  // const [bg, setBg] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }, [])

  window.addEventListener('resize', () => {
    if (window.innerWidth < 1000) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  })

  useEffect(() => {
    let timeOut = (Math.random() * 1000) + 750
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [setLoading])

  return (
    <div className="App">
      <CookieConsent
        flipButtons
        enableDeclineButton
        buttonStyle={{
          background: secondary,
          color: "white",
        }}
        overlay
      // location="middle"
      >By using our website you agree to the use of Cookies to help ensure the site runs smoothly. </CookieConsent>
      <Router>
        <Menu
          text={primaryText}
          isSmallScreen={isSmallScreen}
          handleOpen={handleOpen}
        // bg={bg ? 'transparent' : tertiary}
        />
        <Routes>
          <Route path='/' element={<Homepage
            isSmallScreen={isSmallScreen}
            isOpen={isOpen}
          />}
          >
          </Route >
          <Route path='/flexible-mgmt' element={<Loader
            isSmallScreen={isSmallScreen}
            isOpen={isOpen}
            redirect={"https://bedmarmusic.com"}
          />}
          >
          </Route >
          <Route path='privacy' element={<Privacy
            height='fit-content'
            bg={secondary}
            isSmallScreen={isSmallScreen}
            isOpen={isOpen}
          />}
          >
          </Route >
        </Routes>
        <Footer
          height={isSmallScreen ? '22vh' : '27vh'}
          isSmallScreen={isSmallScreen}
          bg={secondary}
          text='white'
        />
      </Router>
      <div className='loading-overlay' style={{ display: `${loading ? 'block' : 'none'}` }}>
        <div className='spinner-ctn'>
          <div id='bedmar' className='spinner-letter'></div>
          <div  id='vinyl' className='spinner'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
