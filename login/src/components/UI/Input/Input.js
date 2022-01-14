import React, { useRef, useImperativeHandle } from 'react'

import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef()

    // We will call this using a forward ref
    const focusInput = () => {
        inputRef.current.focus()
    }

    useImperativeHandle(
        ref,
        () => {
            return {focus: focusInput}
        }
    )

    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}
        >
            <label htmlFor="email">{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
})

export default Input