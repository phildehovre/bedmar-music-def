import React, { useState } from 'react'
import './Card.css'

function Card(props) {


    const [hovering, setIsHovering] = useState(false)
    const { themeColor, content } = props

    const styles = {
        border: `1px solid ${themeColor}`,
        color: themeColor
    }

    const renderContent = () => {
        if (content.split(' ').length > 1) {
            return content.split(' ').map((word, i) => {
                return <span key={i}>{word} </span>
            })
        }

        return content
    }

    return (<>
        <div className={`card-ctn ${hovering ? 'hover' : ''}`} style={styles}
            // onClick={() => { setIsHovering(!hovering) }}
            onMouseEnter={() => { setIsHovering(true) }}
            onMouseLeave={() => { setIsHovering(false) }}
        >{renderContent()}
        </div>
    </>
    )
}

export default Card