import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ShowCard } from '../../components'

export default function Show() {
    const { id } = useParams()
    // we do this because the ShowCard is rendered before api response
    // so we give it an empty dict first
    const [ show, setShow ] = useState({image: {}, rating: {}})

    useEffect(() => {
        async function displayShow() {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data = await response.json()
        setShow(data)
        }

        displayShow()

    }, [])
    return (
        <main>
            <ShowCard show={show}/>
        </main>
    )
}
