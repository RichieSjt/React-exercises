import React, { useState } from "react"
import Todo from "../models/todo"

type ContextType = {
    items: Todo[]
    addTodo: (text: string) => void
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<ContextType>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
})

const TodosContextProvider = (props: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (todoText: string) => {
        setTodos(prevState => [...prevState, new Todo(todoText)])
    }

    const removeTodoHandler = (todoId: string) => {
        setTodos(prevState => prevState.filter(todo => todoId !== todo.id))
    }

    const contextValue: ContextType = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }


    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider