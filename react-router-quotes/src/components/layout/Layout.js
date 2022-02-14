import React from 'react'
import classes from './Layout.module.css'

import MainNav from './MainNav'

const Layout = (props) => {
    return (
        <React.Fragment>
            <MainNav />
            <main className={classes.main}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout