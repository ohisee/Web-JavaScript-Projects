import React from 'react';
import { Route } from "react-router-dom";
import Navigation from './components/Nav/Navigation';
import Products from './containers/Products';
import Favorites from "./containers/Favorites";

function App() {
  return (
    <React.Fragment>
      <Navigation></Navigation>
      <main>
        <Route path="/" component={Products} exact></Route>
        <Route path="/favorites" component={Favorites}></Route>
      </main>
    </React.Fragment>
  );
}

export default App;
