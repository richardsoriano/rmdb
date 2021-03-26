import { useState, useEffect, useCallback } from 'react'
import { API_URL, API_KEY } from '../../config'

export const useMovieFetch = movieId => {
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = useCallback(async () => {
        setError(false)
        setLoading(true)
        try {
            const endpoint = `${API_URL}/movie/${movieId}?api_key=${API_KEY}`
            const result = await (await (await fetch(endpoint)).json())
            
            const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
            const creditsResult = await (await fetch(creditsEndpoint)).json()
            
            const directors = creditsResult.crew.filter( member => member.job ==='Director')
            const writers = creditsResult.crew.filter( member => member.job === 'Screenplay')
            console.log('writers',writers)
            setMovie({...result,
            actors: creditsResult.cast,
            directors,
            writers })
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }, [movieId])
    
    useEffect(() => {
        if (localStorage[movieId]) {
            setMovie(JSON.parse(localStorage[movieId]))
            setLoading(false)
        } else {
            fetchData()
        }

    }, [fetchData,movieId])
    
    useEffect(() =>{
        localStorage.setItem(movieId, JSON.stringify(movie))
    }, [movieId, movie])

    return [movie, loading, error]
}