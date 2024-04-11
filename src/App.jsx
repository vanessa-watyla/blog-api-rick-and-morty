import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './pages/header';
import Menu from './pages/navbar';
import Pagination from './pages/pagination';
import Posts from './pages/blogPost';
import CharacterInformation from './pages/saibaMais';
import Contato from './pages/contato';
import Sobre from './pages/sobre';
import './App.css'
//import Characters from './pages/characteres';

const Container = styled.div`
background: #000;

`

function App() {
  return (
    <Container>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Header />} />
          </Routes>
          <br />
          <Routes>
            <Route exact path="/" element={<Menu />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={<Posts />} />
          </Routes>
         <Routes>
            <Route exact path="/saiba-mais/:id" element={<CharacterInformation />} />
         </Routes>
         <Routes>
            <Route exact path="/contato/" element={<Contato />} />
          </Routes>
          <Routes>
            <Route exact path="/sobre/" element={<Sobre />} />
          </Routes>
        </div>
      </BrowserRouter> 
    </Container>  
  );
}

export default App;
