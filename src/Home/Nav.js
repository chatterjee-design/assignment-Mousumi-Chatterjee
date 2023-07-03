import React from 'react'
import './Nav.css';

const Nav = ({handleGetUsers}) => {
    return (
        <>
        
            <nav>
                <ul>
                    <li id='logo'>Air Data</li>
                    <li>
                        <button className='btn' onClick={handleGetUsers}>Get Users</button>
                    </li>
                </ul>
            </nav>
 
        </>
    )
}

export default Nav
