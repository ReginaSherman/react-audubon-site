import React, { useState, useEffect } from 'react';
import Birds from './Birds'
import { Route, Routes, Link } from 'react-router-dom'
import BirdDetails from './BirdDetails'

const App = () => {
  const[ birds, setBirds ] = useState([])
  const url = 'https://audubon-api.herokuapp.com/api/birds/'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setBirds(json))
      .catch((err) => console.log('Error!', err))
  }, [])

  return (
    <>
      <header>
        <h1>
          <Link to="/">Audubon Society</Link>
        </h1>
      </header>
      <main>
        <Routes>
          <Route exact path='/' element={ <Birds birds={ birds } /> } />
          <Route path="/details/:id" element={ <BirdDetails /> } /> 
        </Routes>
      </main>
    </>
  );
}

export default App;
