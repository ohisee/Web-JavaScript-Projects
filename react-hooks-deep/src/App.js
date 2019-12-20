/**
 * @fileoverview App component
 */
import React, { useContext } from 'react';
// import Ingridients from './components/Ingridents/Ingridients';
// import IngridientsUseReducer from './components/Ingridents/IngridientsUseReducer';
import Auth from "./components/Auth";
import { AuthContext } from './components/context/auth-context';
import IngridientsUseCustomHook from './components/Ingridents/IngridientsUseCustomHook';

function App(props) {
  const authContext = useContext(AuthContext);

  let content = <Auth />;
  if (authContext.isAuth) {
    content = <IngridientsUseCustomHook />
  }
  return content;
}

export default App;
