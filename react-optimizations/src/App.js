import React, { useState, useCallback, useMemo } from 'react'

import './App.css'
import DemoList from './components/Demo/DemoList'
import Button from './components/UI/Button/Button'

const App = () => {
    const [listTitle, setListTitle] = useState('My List')

    // Functions are objects, everytime the component is re-evaluated the function changes.
    // {key: 'val'} === {key: 'val'} is false, because of how objects are treated
    // We use callback to prevent this from happening by storing the same function
    const changeTitleHandler = useCallback(() => {
        setListTitle('New Title')
    }, [])

    // We can also prevent list objects to change by using the useMemo hook.
    const listItems = useMemo(() => [5, 3, 1, 10, 9], [])

    return (
        <div className="app">
            <DemoList title={listTitle} items={listItems} />
            <Button onClick={changeTitleHandler}>Change List Title</Button>
        </div>
    )
}

export default App
