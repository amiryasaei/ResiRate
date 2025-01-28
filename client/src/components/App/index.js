import React from 'react';
import NavBar from '../NavBar';
import Home from '../Home';

function App() {
  return (
  <>
      <NavBar isHome={true}/>
      <Home />
  </>
  );
}

export default App;
