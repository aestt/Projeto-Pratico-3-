import React from 'react';
import './style.css'
import Logo from '../../assets/OIP.png'

function Footer() {
    return (
        <footer>
            <img id='logo' src={Logo}></img>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por Vinícius Camargo</span>

            <nav class="footer-navigation">
                <ul class="footer-list">
                    <a href="./index.html">
                        <li>Home</li>
                    </a>

                    <a href="./contact.html">
                        <li>Contato</li>
                    </a>

                    <a href="./photos.html">
                        <li>Fotos</li>
                    </a>

                    <a href="./comments.html">
                        <li>Comentários</li>
                    </a>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer