import React from 'react'
import { LoadSeries, ImageItem } from '../'

function ImageGallery({ shows }) {
    return (
        <>
            <div className="shows">
                {
                    shows.map(show => <ImageItem key={show.id} show={show} />)   
                }
            </div>
        </>
    )
}

export default ImageGallery