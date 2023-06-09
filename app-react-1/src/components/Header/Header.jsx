import React from 'react';
import Navigation from '../Nav/Navigation';
import logo from '../../assets/images/LOGO.svg';

const Header = () => {
    return (
        <header className='header-container'>
            <figure className='header-img'>
                <a href='/'>
                    <img className='logo' src={logo} alt="logo de l'agence Kasa" />
                </a>
            </figure>
            <Navigation className="navigation"/>
        </header>
    );
};

export default Header;