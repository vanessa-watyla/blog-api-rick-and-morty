import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Menu from "./navbar";
import Header from "./header";
import styled from 'styled-components';
import Characters from "./characteres";


const CardPostagem = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
width: 50%; 
margin-left: auto; 
padding-right: 5px;

`

const CharacterInformation = () => {
  const { id } = useParams();
  const [information, setInformation] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setInformation(data);
        })
        .catch((err) => {
          console.log(err.message);
        });

      
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data.results.slice(6, 10));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <>
      <Header  />
      <Menu />
       
       <div className="row" >
       <h1 className="font-monospace" style={{color: '#008B8B'}}>Detalhes do personagem:</h1>
          {information && (
            <>
              <div className="col-12 col-md-6 col-xl-6" >
                <div className="card mb-3 font-monospace" style={{borderColor: '#008B8B', color: '#008B8B',}} >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={information.image} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                  <div className="card-body font-monospace">
                    <h5 className="card-title ">{information.name}</h5>
                    <p className="card-text">Espécie: {information.species}</p>
                    <p className="card-text">Gênero: {information.gender}</p>
                    <p className="card-text">Status: {information.status}</p>
                    <p className="card-text">Localização: {information.location.name}</p>
                    <p className="card-text">Origem: {information.origin.name}</p>

                  </div>
                </div>      
                </div>
                </div>
              </div>
            </>
          )}
       </div>
       <div class="container text-center" style={{margin: '-300px', marginLeft: '600px'}}>
          <div class="row">
            <div class="col align-self-end">
              <CardPostagem>
                <Characters characters={characters} /> 
              </CardPostagem>
            </div>
          </div>
       </div>
        <form onSubmit={handleSubmit} >
          <textarea
            className="form-control"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Escreva seu comentário"
            rows="3"
            style={{ width: '500px', background: 'linear-gradient(to left, #242424, #006400)' }}
            cols={50}
          />
          <br />
          <button 
            type="submit" 
            className="btn btn-outline-secondary" 
            style={{ width: '200px', 
              marginLeft: '150px', 
              color: '#008B8B', 
              background: 'linear-gradient(to left, #242424, #006400)' }} >
                      Enviar
          </button>
        </form >
        <div  style={{borderColor: '#008B8B', color: '#008B8B', margin: '10px'}}>
        <h2 >Comentários:</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        </div>
        
    </>
    
    
  );
}

export default CharacterInformation;
