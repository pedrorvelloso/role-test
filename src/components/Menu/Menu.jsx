import React from 'react'
import { NavLink } from 'react-router-dom';

let role = localStorage.getItem('role')

export default props => (
    <p>
        {props.routes.map((route, key) => {
            if (route.redirect) return null
            if (route.role && route.role !== role) return null
            return (
                <NavLink
                    to={route.path}
                    key={key}
                    className="App-menu"
                    activeClassName="App-menu-active"
                >
                    {route.name}
                </NavLink>)
        })}
    </p>
)