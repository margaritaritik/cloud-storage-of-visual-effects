import React from 'react';
import { Outlet, Link } from "react-router-dom";



const Layout = () => {
    return <div>

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
            <img style={{width:"170px"}} src="http://127.0.0.1:9003/image/ImagesForClient/logo.png" alt=""/>
        </nav>
        <Outlet />
    </div>;
};

export default Layout;