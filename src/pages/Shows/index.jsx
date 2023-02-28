import React, { useEffect, useState } from 'react'
import { ImageGallery, LoadSeries } from '../../components'

import styles from './styles.module.css'

export default function Shows() {
    const [shows, setShows] = useState([])
    const [error, setError] = useState(null)

    async function displayShows() {
        try {
            const response = await fetch('https://api.tvmaze.com/shows')
            const data = await response.json()
            setShows(data)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        displayShows()
    }, [])
    
    return (
        <main>
            {
                !error
                    ? <ImageGallery shows={shows}/>
                    : <LoadSeries />
            }
            
        </main>
    )
}
