/**
 * @fileoverview App functional component
 */
import React, { useState, Suspense, lazy } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Auth from "./components/Auth";
import AuthContext from "./auth-context";
import Spinner from './components/Spinner';

const Todo = lazy(() => {
  return import('./components/Todo');
});

const TodoRef = lazy(() => import('./components/TodoRef'));
const TodoCustomHook = lazy(() => import('./components/TodoCustomHook'));
const InputText = lazy(() => import('./components/InputText'));
const TriggerError = lazy(() => import('./components/TriggerError'));
const ScrollContainer = lazy(() => import('./components/ScrollContainer'));
const SignIn = lazy(() => import('./components/VerifyAuth'));
const SignInOut = lazy(() => import('./components/InvalidateAuth'))
const Layout = lazy(() => import('./components/Layout'));

const App: React.FC = () => {

  const [page, setPage] = useState<string>('auth');
  const [authStatus, setAuthStatus] = useState<boolean>(false);

  const switchPage = (pageName: string) => {
    setPage(pageName);
  };

  const login = () => {
    setAuthStatus(true);
  };

  const logout = () => {
    setAuthStatus(false);
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ status: authStatus, login, logout }}>
        <Header
          onLoadTodos={() => switchPage('todos')}
          onLoadAuth={switchPage.bind(App, 'auth')} />
        <hr />
        {page === 'auth' ? <Auth /> : null}
        {/* {authStatus === true ?
          <Switch>
            <Route path="/todo" component={Todo}></Route>
            <Route path="/todoref" component={TodoRef}></Route>
            <Route path="/todocustomhook" component={TodoCustomHook}></Route>
            <Route path="/inputtext" component={InputText}></Route>
          </Switch> : null} */}
        {authStatus === true ?
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/todo" render={() => <Todo />}></Route>
              <Route path="/todoref" render={() => <TodoRef />}></Route>
              <Route path="/todocustomhook" render={() => <TodoCustomHook />}></Route>
              <Route path="/inputtext" render={() => <InputText />}></Route>
              <Route path="/error" render={(props) => <TriggerError {...props} />} />
              <Route path="/playground" render={() => <ScrollContainer />}></Route>
              <Route path="/signin" render={() => <SignIn />}></Route>
              <Route path="/rescind" render={() => <SignInOut />}></Route>
              <Route path="/layout" render={() => <Layout />}></Route>
            </Switch>
          </Suspense>
          : null}
      </AuthContext.Provider>
    </div>
  );
};

export default App;
