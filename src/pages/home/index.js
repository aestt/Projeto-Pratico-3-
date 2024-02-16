import React from 'react';
import Header from '../../components/header/header';
import './styles.css';
import Trailer from '../../assets/trailer.mp4'
import Cards from '../../components/cards';
import Footer from '../../components/footer';

function Home() {
    return (
        <>
            <Header />

            <div id="banner"></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source src={Trailer}/>
                        Seu navegador não possui suporte para vídeos
                    </video>

                    <div id='sinopse'>
                        <p className='description'>
                            Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas
                            mais sombrias de Ghotam City. Com poucos alidos confiáveis, o vigilante solitário se estabelece
                            como a personificação da vingança da população.
                        </p>
                        <button className='button'>Comprar Ingresso</button>
                    </div>
                </div>
            </div>

            <Cards />
            <Footer />
        </>
    )
}

export default Home