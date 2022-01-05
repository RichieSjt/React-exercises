import React from 'react';
import './Card.css'

const Card = (props) => {
    // We append classes added in component instance
    const classes = 'card ' + props.className

    // props.children helps us create wrapper components
    return <div className={classes}>{props.children}</div>
}

export default Card