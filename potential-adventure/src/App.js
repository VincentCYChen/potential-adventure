import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Submit from './components/Submit';
import Exhibitions from './components/Exhibitions';
// import ExhibitionEntry from './components/ExhibitionEntry';
// import Featured from './components/Featured';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/submit" component={Submit} />
        <Route path="/exhibitions" component={Exhibitions} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
