import './Card.css'

// Wrapper card component
const Card = (props) => {
    // props.className obtains the additional classes set in the Card component
    const classes = 'card ' + props.className
    // props.children obtains the content wrapped inside the Card component
    return <div className={classes}>{props.children}</div>
}

export default Card