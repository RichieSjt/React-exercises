import React, { useState, useRef } from 'react'
import styles from './UserRegister.module.css'

import Card from '../UI/Card'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import Wrapper from '../Helpers/Wrapper'

const UserRegister = props => {
    const usernameInputRef = useRef()
    const ageInputRef = useRef()

    const [error, setError] = useState()

    const addUser = e => {
        e.preventDefault()

        const username = usernameInputRef.current.value
        const age = ageInputRef.current.value

        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empy values)'
            })
            return
        }

        if (+age < 1) { 
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age'
            })
            return
        }

        const user = {
            key: Math.random().toString(),
            username,
            age: +age
        }
        
        // Reseting input in DOM element
        usernameInputRef.current.value = ''
        ageInputRef.current.value = ''
        
        props.onAddUser(user)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {/* If the error is undefined (initial state), the modal is not rendered */}
            {error && <Modal title={error.title} message={error.message} onClose={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUser}>
                    <label htmlFor="username">Username</label>
                    <input ref={usernameInputRef} type="text" id="username" />
                    <label htmlFor="age">Age (Years)</label>
                    <input ref={ageInputRef} type="number" id="age" />

                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default UserRegister