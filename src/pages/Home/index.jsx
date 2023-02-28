import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <main>
            <h1>Top TV</h1>
            <em>All about the smaller silver screen</em>
            <ul>
                <li><Link 
                    to="/shows"
                    style={{color:'#1746A2'}}
                >
                Explore Shows
                </Link></li>
                <li><Link 
                    to="/search"
                    style={{color:'#1746A2'}}
                >
                Search your favourite shows
                </Link></li>
            </ul>
        </main>
    )
}
