import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='navigation'>
            
                <NavLink to="/" className="navigation_home">
                    Accueil
                </NavLink>
                <NavLink to="/about" className="navigation_about">
                    A propos
                </NavLink>

        </nav>
    );
};

export default Navigation;