import { Component } from 'react'
import User from './User'

import classes from './Users.module.css'

class Users extends Component {
    constructor() {
        // When we extend a class we need to call super to inherit parent methods
        super()
        // State is always an object in class based components
        this.state = {
            showUsers: true
        }
    }

    toggleUsersHandler() {
        this.setState((prevState) => {
            return {showUsers: !prevState.showUsers}
        })
    }

    render() {
        const usersList = (
            <ul>
                {this.props.users.map((user) => (
                    <User key={user.id} name={user.name} />
                ))}
            </ul>
        )

        return (
            <div className={classes.users}>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && usersList}
            </div>
        )
    }
}


// const DUMMY_USERS = [
//     { id: 'u1', name: 'Max' },
//     { id: 'u2', name: 'Manuel' },
//     { id: 'u3', name: 'Julie' },
// ]

// const Users = () => {
//     const [showUsers, setShowUsers] = useState(true)

//     const toggleUsersHandler = () => {
//         setShowUsers((curState) => !curState)
//     }

//     const usersList = (
//         <ul>
//             {DUMMY_USERS.map((user) => (
//                 <User key={user.id} name={user.name} />
//             ))}
//         </ul>
//     )

//     return (
//         <div className={classes.users}>
//             <button onClick={toggleUsersHandler}>
//                 {showUsers ? 'Hide' : 'Show'} Users
//             </button>
//             {showUsers && usersList}
//         </div>
//     )
// }

export default Users
