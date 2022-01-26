import { useState, useEffect } from 'react'

const useCounter = step => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + step)
        }, 1000)

        return () => clearInterval(interval)
    }, [step])

    // You can return whatever you want in custom hooks
    return counter
}

export default useCounter