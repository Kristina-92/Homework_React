import React from 'react';
import {Link} from 'react-router';

export const Nav = () => {

    return(
        <ul id='nav'>
            <li><Link to='/'>App</Link></li>
            <li><Link to='/users'>Users</Link></li>
        </ul>
    )
}