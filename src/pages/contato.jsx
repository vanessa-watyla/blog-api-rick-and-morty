import React, { useState } from "react";
import Menu from "./navbar";
import Header from "./header";
import styled from 'styled-components';



const CenteredCard = styled.div`
    max-width: 800px; 
    margin: 0 auto; 
`

export default function Contato() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = () => {
    setFormSubmitted(true);
    setNome("");
    setEmail("");
    setMensagem("");

    setTimeout(() => {
      setFormSubmitted(false);
    }, 1500);
  };

  return (
    <>
      <Header />
     <a href='/' style={{textDecoration: 'none'}}>{<Menu />}</a>
     <br />
     <br />
     <br />
     <CenteredCard> 
        <div className="card" style={{ backgroundImage: 'url(src/pages/imagens/portal.jpg)' }}>
          <div className="card-header font-monospace" style={{color: '#008B8B', textAlign: 'center'}}>
            <h1>Contate-nos</h1>
            <p>Alguma dúvida ou observação? Basta nos escrever uma mensagem!</p>
          </div>
          <div className="card-body font-monospace">
            <div className="row g-3 p-5" style={{color: '#008B8B'}}>
              <div className=" col-12">
                <label className="form-label ">Nome</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Ex.: Krystian Paixão" 
                  aria-label="Nome" 
                  style={{ width: '500px', background: 'linear-gradient(to left, #242424, #006400)' }} 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className=" col-12">
                <label htmlFor="inputEmail4 " className="form-label">E-mail</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="exemplo@mail.com" 
                  aria-label="E-mail"
                  style={{ width: '500px', background: 'linear-gradient(to left, #242424, #006400)' }}  
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" col-12">
                <label htmlFor="textAreal4 " className="form-label">Como podemos ajudar?</label>
                <textarea 
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  placeholder="Escreva seu comentário"
                  rows="3" 
                  style={{ width: '500px', background: 'linear-gradient(to left, #242424, #006400)' }} 
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                ></textarea>
              </div>
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                style={{ width: '200px', marginLeft: '150px', color: '#008B8B', background: 'linear-gradient(to left, #242424, #006400)' }} 
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </div>
            {formSubmitted && (
              <div className="alert alert-success" role="alert" style={{ width: '300px' }}>
                Formulário enviado com sucesso!
              </div>
            )}
          </div>
        </div>
     </CenteredCard>
    </>
  )
}
