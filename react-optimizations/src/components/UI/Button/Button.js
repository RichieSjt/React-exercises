import React from 'react'

import classes from './Button.module.css'

const Button = (props) => {
    console.log('Button RUNNING')
    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

// Using memo to only re-evaluate the component when props change
export default React.memo(Button)