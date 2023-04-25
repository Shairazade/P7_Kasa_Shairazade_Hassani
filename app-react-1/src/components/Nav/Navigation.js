import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className>
                    <li>A propos</li>
                </NavLink>
            </ul>

        </div>
    );
};

export default Navigation;