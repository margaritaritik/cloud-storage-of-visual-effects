import React from 'react';
import { Outlet, Link } from "react-router-dom";



const Layout = () => {
    return <>
        <nav className='header'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/registration">Registration</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>;
};

export default Layout;