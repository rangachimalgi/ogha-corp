import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">About Us</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">Automated External Defibrillator</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/blog-grid"}><span className="menu-text">Blog</span></NavLink> 
                </li>
            </ul>
        </nav>
    )
}

export default NavBar