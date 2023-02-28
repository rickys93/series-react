import React, { useState, useEffect } from 'react'

function ShowSorter({ setSortValue }) {
    function handleSortChange(e) {
        setSortValue(e.target.value)
    }

    return (
        <form>
            <label htmlFor="sort">Sort By</label>
            <select 
                name="sort" 
                id="sort"
                onChange={handleSortChange}
            >
                <option 
                    value="id"
                >None</option>
                <option 
                    value="rating"
                >Rating</option>
                <option 
                    value="premiered"
                                
                >Date</option>
            </select>
        </form>
    )
}

export default ShowSorter