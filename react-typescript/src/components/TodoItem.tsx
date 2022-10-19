import React from 'react'
import styles from './TodoItem.module.css'

type TodoItemProps = {
    children?: React.ReactNode
    text: string
    onRemoveTodo: () => void
}

const TodoItem = (props: TodoItemProps) => {
    return (
        <li className={styles.item} onClick={props.onRemoveTodo}>
            {props.text}
        </li>
    )
}

export default TodoItem
