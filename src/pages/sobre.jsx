import React from 'react';
import Header from './header';
import Menu from './navbar';

export default function Sobre() {
  return (
    <>
        <Header/>
        <Menu/>
        <div className="d-flex justify-content-center align-items-center" style={{ margin: '50px' }}>
            <div className="row">
                <div className="col-12 col-md-6 col-xl-12">
                    <div className="card-group" >
                        <div 
                            className="card" 
                            style={{
                                backgroundImage: 'url(src/pages/imagens/portal.jpg)', 
                                backgroundColor: '#008B8B', 
                                color: '#008B8B'}}>
                            <div className="card-body" >
                                <h5 className="card-title">Um pouco sobre:</h5>
                                <p className="card-text">Este mini Blog foi criado por estudantes da Universidade Federal Rural da Amazônia -  UFRA do 6º semestre do Curso de Sistemas de Informação</p>
                                <br />
                                <hr />
                                <p className="card-text">Desenvolvedores: Vanessa Watyla, Pablo Nathan e Ana Heloisa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}
