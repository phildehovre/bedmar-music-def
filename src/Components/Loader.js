import React from 'react'
import { useEffect } from 'react'
import Hero from './Hero'

function Loader(props) {
  const {secondary, primaryText, redirect} =props

useEffect(() => {
  // setTimeout(() => {
    window.location.href = redirect
  // }, )
}, [redirect])


  return (
               <Hero
                height='85vh'
                bg=''
                bgImage='https://res.cloudinary.com/dtnif6mzm/image/upload/v1656334495/Bedmar%20Music/pexels-wendy-wei-1916824_sj6add.jpg'
                text={primaryText}
                content='A non-traditional management company empowering artists and music businesses we believe in.'
                themeColor={secondary}
            />
  )
}

export default Loader