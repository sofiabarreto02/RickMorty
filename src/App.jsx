import { useState } from 'react';
import './App.css';
import { Card } from './Componentes/Card';

const URL = 'https://rickandmortyapi.com/api/character?count=20';

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  const handleGetApi = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCharacters(data.results);
   
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

      <input type='text' placeholder='Buscar por nombre' onChange={handleSearchChange}></input>
      <div className="card-container">
      {filteredCharacters.map((character, index) => (
          <Card 
            key={index}
            nameCharacter={character.name}
            imgCharacter={character.image}
            genderCharacter={character.gender}
          />
        ))}
      </div>
      <button className='buttonCard' onClick={handleGetApi}>Generar Personajes</button>
    </>
  );
}

export default App;

