import React from 'react';
import Home from './components/Home';
import Submit from './components/Submit';
import Exhibitions from './components/Exhibitions';
import ExhibitionEntry from './components/ExhibitionEntry';
import Featured from './components/Featured';

function App() {
  return (
    <div className="App">
      <Home />
      <Submit />
      <Exhibitions />
      <ExhibitionEntry />
      <Featured />
    </div>
  );
}

export default App;
