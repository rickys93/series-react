import React from 'react'
import ShowCard from '../ShowCard'

function ShowList({ showData }) {
    return (
        <div className='shows'>
            {
                showData.filter(show => show.image? true : false)
                    .map(show => <ShowCard key={show.id} show={show}/>)
            }
        </div>
    )
}

export default ShowList