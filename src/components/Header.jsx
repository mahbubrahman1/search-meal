import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='space-x-6 font-medium'>
            <NavLink
                style={({ isActive }) => {
                    return isActive ? { color: "orange", fontWeight: "bold" } : {}
                }}
                to="/">HOME</NavLink>
            <NavLink
                style={({ isActive }) => {
                    return isActive ? { color: "orange", fontWeight: "bold" } : {}
                }}
                to="/meals">MEALS</NavLink>
            <NavLink
                style={({ isActive }) => {
                    return isActive ? { color: "orange", fontWeight: "bold" } : {}
                }}
                to="/about">ABOUT</NavLink>
        </nav>
    )
}

export default Header