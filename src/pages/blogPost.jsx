import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Characters from "./characteres";
import Pagination from "./pagination";

export default function Posts() {
  const [characters, setCharacteres] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character/";

  const fetchCharacteres = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.info) {
          setCharacteres(data.results);
          setInfo(data.info);
        }
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacteres(info.prev)
  }

  const onNext = () => {
    fetchCharacteres(info.next)
  }

  useEffect(() => {
    fetchCharacteres(initialUrl);
  }, []);

  return (
    <div className="container mt-3">
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <Characters characters={characters} />
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
