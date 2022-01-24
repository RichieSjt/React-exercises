import { Component } from 'react'

// We can only create ErrorBoundaries with class based components
class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }
    
    // Lifecycle method triggered whenever a child component throws an error
    componentDidCatch(error) {
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError)
            return <p>An error ocurred!</p>
        return this.props.children
    }
}

export default ErrorBoundary