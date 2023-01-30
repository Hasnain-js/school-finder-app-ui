import React from 'react';
const Navbar = () => {
    return (
        <div className='navbar-container'>
            <h1>Company Logo</h1>
            <div className='navbar'>
                <div className='navbar__nav-links'>
                        <a href='/'>Home</a>
                        <a href='/'>About</a>
                        <a href='/'>Contact</a>
                </div>
                <div className='navbar__action-buttons'>
                    <button className='navbar__btn btn-primary'>Sign Up</button>
                </div>
            </div>

        </div>
    )
};


export default Navbar;