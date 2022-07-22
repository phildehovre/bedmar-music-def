import React, { useState } from 'react'
import './Card.css'

function Card(props) {


    const [hovering, setIsHovering] = useState(false)
    const { themeColor, content } = props

    const styles = {
        border: `1px solid ${themeColor}`,
        color: themeColor
    }

    return (<>
        <div className={`card-ctn ${hovering ? 'hover' : ''}`} style={styles}
            // onClick={() => { setIsHovering(!hovering) }}
            onMouseEnter={() => { setIsHovering(true) }}
            onMouseLeave={() => { setIsHovering(false) }}
        >{content}
        </div>
    </>
    )
}

export default Card