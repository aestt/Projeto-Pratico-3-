import React from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/OIP.png'

function Header() {
    return (
        <header>
            <img id='logo' src={Logo}></img>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to={'/'}>
                        <li>Home</li>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to={'/contato'}>
                        <li>Contato</li>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to={'/fotos'}>
                        <li>Fotos</li>
                    </Link>
                    <li>Comentários</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;