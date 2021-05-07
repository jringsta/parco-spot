import React from 'react';
import logo from './ParcoLogo.png';
import './Header.css';

const Header = props => {
    return (
        <nav>
            <div className="flex">
                    <img className="logo-size pv3" src={logo} alt="parco logo" />
            </div>
        </nav>
    );
}

export default Header;