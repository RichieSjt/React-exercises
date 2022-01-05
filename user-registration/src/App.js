import React, { useState } from 'react'

import UserRegister from './components/Users/UserRegister';
import UsersList from './components/Users/UsersList';

const App = () => {
    const [usersList, setUsersList] = useState([])

    const addUser = user => {
        setUsersList(prevUsersList => [...prevUsersList, user])
    }

    return (
        <div>
            <UserRegister onAddUser={addUser}/>
            <UsersList users={usersList} />
        </div>
    );
}

export default App;