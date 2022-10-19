import React, { useContext, useRef } from "react"
import { TodosContext } from "../store/todos-context"
import styles from './NewTodo.module.css'

// type NewTodoProps = {
//     children?: React.ReactNode
//     onAddTodo: (text: string) => void
// }

// const NewTodo = (props: NewTodoProps) => {
const NewTodo = () => {
    const todosCtx = useContext(TodosContext)
    const textRef = useRef<HTMLInputElement>(null)

    // This is why it adds question mark, if the ref is not yet connected. The inferred type is string | undefined
    // const enteredText = textRef.current?.value


    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        // ! indicates that we are sure the ref connection has already been made at this point and we should always
        // have a value
        const enteredText = textRef.current!.value

        if(enteredText.length === 0) return 

        todosCtx.addTodo(enteredText)
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={textRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo