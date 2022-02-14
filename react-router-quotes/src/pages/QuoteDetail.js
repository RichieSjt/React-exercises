import React, { useEffect } from 'react'
import { Route, Link, useRouteMatch } from 'react-router-dom'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'

import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const QuoteDetail = () => {
    // Match is like location but includes more information
    const match = useRouteMatch()

    // Match object
    // isExact: false
    // params: {
    //     quoteId: 'q2'
    // }
    // path: '/quotes/:quoteId'
    // url: '/quotes/q2'

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

    useEffect(() => {
        sendRequest(match.params.quoteId)
    }, [sendRequest, match.params.quoteId])

    if(status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    }

    if(error) {
        return <p className='centered'>{error}</p>
    }

    if(!loadedQuote.text) {
        return <p>No quote found!</p>
    }

    return (
        <React.Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

            {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>

            {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </React.Fragment>
    )
}

export default QuoteDetail
