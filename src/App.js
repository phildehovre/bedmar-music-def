import React, { useEffect, useState } from 'react'
import './Styles/Global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import { stylesVariables } from './Styles/Variables';
import './Styles/Global.css';
import CookieConsent from "react-cookie-consent";
import Privacy from './Components/Privacy'


function App() {

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
          <div className='spinner-letter'></div>
          <div className='spinner'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
