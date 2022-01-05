import React, { useState } from 'react'

import UserRegister from './components/Users/UserRegister';
import UsersList from './components/Users/UsersList';

const App = () => {
    const [usersList, setUsersList] = useState([])

    const addUser = user => {
        setUsersList(prevUsersList => [...prevUsersList, user])
    }

    return (
        // We can use React.Fragment or empty <> </> to create wrapping elements that don´t add an extra div to the DOM
        <React.Fragment>
            <UserRegister onAddUser={addUser}/>
            <UsersList users={usersList} />
        </React.Fragment>
    );
}

export default App;