import React from 'react'
import { Link } from 'react-router-dom'

function ImageItem({ show }) {
    return (
        <Link to={`${show.id}`}>
            <div className='gallery-image'>
                <img src={show.image.medium} alt={show.name} />
            </div>
        </Link>
  )
}

export default ImageItem