import useHttp from '../../hooks/use-http'

import FIREBASE from '../../utils/api-keys'
import Section from '../UI/Section'
import TaskForm from './TaskForm'

const NewTask = (props) => {
    const {isLoading, error, sendRequest: saveTask} = useHttp()

    const createTask = (taskText, taskData) => {
        const generatedId = taskData.name // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText}

        props.onAddTask(createdTask)
    }

    const enterTaskHandler = (taskText) => {
        saveTask(
            {
                url: FIREBASE,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: { text: taskText }
            }, createTask.bind(null, taskText)
        )
    }

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    )
}

export default NewTask