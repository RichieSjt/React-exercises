import React, { useMemo } from 'react'

import classes from './DemoList.module.css'

const DemoList = (props) => {
    const { items } = props

    // useMemo hook stores the sorted array to not re-sort on component re-evaluation
    // Sorting only occurs if the items array changes
    const sortedList = useMemo(() => {
        console.log('Items sorted')
        return items.sort((a, b) => a - b)
    }, [items])

    console.log('DemoList RUNNING')

    return (
        <div className={classes.list}>
            <h2>{props.title}</h2>
            <ul>
                {sortedList.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

// Using memo to only re-evaluate the component when props change
export default React.memo(DemoList)
