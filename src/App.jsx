import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import SearchForm from './SearchForm'
import GenreSelect from './GenreSelect'


function App() {
  const handleSearch = (query) => {
  console.log('Searched Query:', query);
};

const handleGenreSelect = (genre) => {
  console.log('Selected Genre:', genre);
};
const initialQuery = "Random Movie"; 
   const genreList = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME']; 
   const selectedGenre = 'ALL'; 


  return (
      <div >
        <div > 
          <h1>Counter</h1>
          <Counter initialValue={5} />
        </div>
        <div > 
          <h1>Search Form</h1>
          <SearchForm initialQuery={initialQuery}  onSearch={handleSearch} /> 
        </div>
        <div >
          <h1>Genre Select</h1>
          <GenreSelect 
            genreList={genreList} 
            selectedGenre={selectedGenre} 
            onSelect={handleGenreSelect} 
          />
        </div>
      </div>
  )
}

export default App
