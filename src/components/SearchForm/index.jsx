import React, { useState } from 'react'

function SearchForm({ getSeries }) {
    const [searchInput, setSearchInput] = useState("") 

    const handleInput = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchInput)
        getSeries(searchInput)
    }
    return (
        <form
            role="search"
            onSubmit={handleSubmit}
        >
            <label htmlFor="series">Series</label>
            <input 
                type="text" 
                name="series" 
                id="series" 
                onChange={handleInput}
                value={searchInput}
                placeholder="What are you looking for?"
            />
            <input type="submit" value="Search" />
        </form>
    )
}

export default SearchForm