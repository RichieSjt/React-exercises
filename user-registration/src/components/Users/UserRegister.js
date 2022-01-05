import React, { useState } from 'react'
import styles from './UserRegister.module.css'

import Card from '../UI/Card'
import Button from '../UI/Button'
import Modal from '../UI/Modal'

const UserRegister = props => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState()

    const usernameChangeHandler = e => { setUsername(e.target.value) }
    const ageChangeHandler = e => { setAge(e.target.value) }

    const addUser = e => {
        e.preventDefault()

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

        props.onAddUser(user)

        setAge('')
        setUsername('')
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {/* If the error is undefined (initial state), the modal is not rendered */}
            {error && <Modal title={error.title} message={error.message} onClose={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUser}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={usernameChangeHandler} value={username} />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" onChange={ageChangeHandler} value={age} />

                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
    )
}

export default UserRegister