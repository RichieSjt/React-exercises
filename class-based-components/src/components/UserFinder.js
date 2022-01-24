import { Fragment, Component } from 'react'
import UsersContext from '../store/users-context'
import ErrorBoundary from './ErrorBoundary'
import classes from './UserFinder.module.css'
import Users from './Users'

class UserFinder extends Component {
    // You can only use one context per component in class based components
    static contextType = UsersContext

    constructor() {
        super()
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    // Equivalent to useEffect without dependencies, executing only on first component evaluation
    componentDidMount() {
        // Send http request...
        this.setState({ filteredUsers: this.context.users })
    }

    // Equivalent to useEffect with dependencies
    // This method will be called by react whenever the component is re-evaluated
    componentDidUpdate(prevProps, prevState) {
        // Equivalent to useEffect dependencies
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({filteredUsers: 
                this.context.users.filter((user) => 
                    user.name.includes(this.state.searchTerm)
                )
            })
        }
    }
    
    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type="search" onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        )
    }
}

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS)
//     const [searchTerm, setSearchTerm] = useState("")

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         )
//     }, [searchTerm])

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value)
//     }

//     return (
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type="search" onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     )
// }

export default UserFinder