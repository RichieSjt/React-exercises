import React from 'react'
import styles from './UsersList.module.css'

import Card from '../UI/Card'

const UserList = props => {
    return (
        <Card className={styles.users}>
            <ul>
               {props.users.map(user => <li key={user.key}>{user.username} ({user.age}) Years old</li>)}
            </ul>
        </Card>
    )
}

export default UserList
