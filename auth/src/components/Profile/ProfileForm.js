import { useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import AuthContext from '../../store/auth-context'
import classes from './ProfileForm.module.css'


const ProfileForm = () => {
    const authCtx = useContext(AuthContext)
    const history = useHistory()

    const newPasswordRef = useRef()

    const submitHandler = async (e) => {
        e.preventDefault()

        const enteredPassword = newPasswordRef.current.value
    
        // validation

        // Request config to change password
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDD9yjQ8Gn70Vzorc4233n2FEOFQ2KAf-8'
        const config = {
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token,
                password: enteredPassword,
                returnSecureToken: false
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        // We assume it always succeeds but we should catch the error
        const res = await fetch(url, config)
        const data = await res.json()
        console.log(data)
        history.replace('/')
    }
    
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='new-password'>New Password</label>
                <input ref={newPasswordRef} type='password' id='new-password' minLength='7'/>
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    )
}

export default ProfileForm
