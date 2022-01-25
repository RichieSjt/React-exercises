import React, { useState, useEffect, useCallback } from 'react'

import FIREBASE from './utils/api-keys' 
import MoviesList from './components/MoviesList'
import AddMovie from './components/AddMovie'
import './App.css'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // // We use useCallback to prevent the function re-creation on component evaluation, therefore avoiding an infinite loop in useEffect
    // const fetchMoviesHandler = useCallback(async () => {
    //     setIsLoading(true)
    //     setError(null)

    //     try {
    //         const res = await fetch('https://swapi.dev/api/films')

    //         // We could also check res.status
    //         if (!res.ok) { throw new Error('Something went wrong!') }

    //         const data = await res.json()

    //         const newData = data.results.map(movie => {
    //             return {
    //                 id: movie.episode_id,
    //                 title: movie.title,
    //                 openingText: movie.opening_crawl,
    //                 releaseDate: movie.release_date
    //             }
    //         })
    //         setMovies(newData)
    //     } catch (e) {
    //         setError(e.message)
    //     }
    //     setIsLoading(false)
    // }, [])

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true)
        setError(null)

        try {
            const res = await fetch(FIREBASE)

            // We could also check res.status
            if (!res.ok) { throw new Error('Something went wrong!') }

            const data = await res.json()

            const loadedMovies = []

            for(const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate
                })
            }
            
            setMovies(loadedMovies)
        } catch (e) {
            setError(e.message)
        }
        setIsLoading(false)
    }, [])

    const addMovieHandler = async movie => {
        const res = await fetch(FIREBASE, {
                method: 'POST',
                body: JSON.stringify(movie),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        
        const data = await res.json()
        console.log(data)
    }

    // useEffect is great when we have code that should be executed as part of the component life-cycle
    useEffect(() => {
        fetchMoviesHandler()
        // We add fetchMoviesHandler to the dependencies in case we managed another state inside that function
    }, [fetchMoviesHandler])

    let content = <p>No movies found</p>

    if (movies.length > 0) { content = <MoviesList movies={movies} /> }
    if (error) { content = <p>{error}</p> }
    if (isLoading) { content = <p>Loading...</p> }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section> 
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
                {content} 
            </section>
        </React.Fragment>
    )
}

export default App
