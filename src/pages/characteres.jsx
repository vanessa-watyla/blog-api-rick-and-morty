import React from "react";
import Pagination from "./pagination";

import { Link } from "react-router-dom";


const Characters = ({ characters }) => {
  const personagens = characters.slice(0, 10);

  return (
    <div className="row" style={{margin: '20px'}}>
      {personagens.map((item, index) => (
        <div key={index} className="col-12 col-md-6 col-xl-6">
          
          <div className="card mb-3 font-monospace" style={{backgroundImage: 'url(src/pages/imagens/portal.jpg)', borderColor: '#008B8B', color: '#008B8B'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.image} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Éspecie: {item.species}</p>
                  <p className="card-tex">Status: {item.status}</p>
                  <p className="card-tex">Localização: {item.location.name}</p>
                  <br />
                  <br />
                  <Link to={`/saiba-mais/${item.id}`} style={{textDecoration: 'none', color: '#008B8B' }}>Saiba mais</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
