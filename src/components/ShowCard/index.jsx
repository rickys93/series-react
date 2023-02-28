import React from 'react'

function ShowCard({ show }) {
    // const formatDate = (date) => {
    //     return new Intl.DateTimeFormat('en-GB').format(new Date(date))
    // }
    const formatDate = (date) => {
        return new Date(date).toLocaleString('en-GB', {
            day:'numeric',
            month: 'short',
            year:'numeric'
        })
    }

    return (
        <div className='show-card'>
            <div>
                <img src={show.image.medium} alt={show.name} />
            </div>
            <div>
                <div>
                    {
                        show.rating.average
                        ? <span>{show.rating.average} / 10 </span>
                        : ""
                    }
                </div>
                <h2>{show.name}</h2>
                <em>{show.language}, {formatDate(show.premiered)}</em>
                <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
            </div>
        </div>
    )
}

export default ShowCard