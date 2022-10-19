import React, { useContext } from 'react'
import styles from './Todos.module.css'

import TodoItem from './TodoItem'
import { TodosContext } from '../store/todos-context'

// type TodosProps = {
//     children?: React.ReactNode
//     items: Todo[]
//     onRemoveTodo: (todoId: string) => void
// }

// const Todos = (props: TodosProps) => {
const Todos = () => {
    const todosCtx = useContext(TodosContext)
    
    return (
        <ul className={styles.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    )
}

export default Todos
