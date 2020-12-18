import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarLogin = () =>{
    const state = useSelector((state)=>state.auth)
    return(
        <nav class="navbar navbar-expand-sm bg-light navbar-light" style={{marginBottom:10}}>
            <ul class="navbar-nav">
                <li class="nav-item active" style={{margin:10}}>
                    <NavLink to="/">Home</NavLink>
                </li>

                {state.isLoggedIn 
                ?
                <li class="nav-item" style={{margin:10}}>
                    <NavLink to="/logout">Logout</NavLink>
                </li>
                :
                [<li class="nav-item" style={{margin:10}}>
                    <NavLink to="/login">Login</NavLink>
                </li>,
                <li class="nav-item" style={{margin:10}}>
                    <NavLink to="/register">Register</NavLink>
                </li>]
                }
                

            </ul>
        </nav>
    );
}

export default NavbarLogin;