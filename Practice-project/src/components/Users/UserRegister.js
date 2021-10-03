import React from 'react';

const UserRegister = props => {
    const addUserHandler= e => {
        e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"></input>
            <label htmlFor="age">Age (In years)</label>
            <input id="age" type="number"></input>
            <button type="submit">Add user</button>
        </form>
    )
}

export default UserRegister