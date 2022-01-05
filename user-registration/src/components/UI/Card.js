import React from 'react'
import styles from './Card.module.css'

const Card = props => {
    // Adding incoming classes from component instance
    return <div className={`${styles.card} ${props.className}`}>{props.children}</div>
}

export default Card