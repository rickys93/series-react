import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
    const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' });
    return (
        <>
            <header>
                <nav>
                    <NavLink style={styles} to="/">Home</NavLink>
                    <NavLink style={styles} to="/shows">Shows</NavLink>
                    <NavLink style={styles} to="/search">Search</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
  )
}