import React from 'react';
import reactLogo from '../assets/react.svg';

function Navbar() {
    return (
        <nav>
            <img className='nav-icon' src={reactLogo} alt="" />
            <h3 className='nav-logo-text'>ReactFacts</h3>
            <h4 className='nav-title'>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar;