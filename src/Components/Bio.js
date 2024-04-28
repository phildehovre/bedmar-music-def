import React from 'react'
import {bio } from '../Assets/bio'

const Bio = () => {

    const renderBio = () => {
        return bio.split('.').map((sentence, index) => {
            if (index % 2 != 0) {
                return (
                    <span key={sentence} class="bio-black">{sentence}.</span>
                )
            } else {
                return <span key={sentence} class="bio-white">{sentence}.</span>
            }
        })
    }

  return (
    <p>{renderBio()}</p>
  )
}

export default Bio