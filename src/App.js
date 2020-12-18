import React from 'react';
import './App.css';
import Navbar from'./components/NavbarLogin';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import Chat from './components/Chat';
import Logout from './components/Logout';

import { BrowserRouter, route, Route, Redirect } from 'react-router-dom';
import { getNodeText } from '@testing-library/react';

import { Provider, useSelector, useDispatch } from 'react-redux'
import * as AuthActions from './store/actions/Auth';

function App() {

  const state = useSelector(state=>state.auth)
  console.log(state.isLoggedIn);

  return (

      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/login"
          render={()=>(
            (state.isLoggedIn==false) 
            ?
            <Login />
             :
            <Redirect to="/chat" />
          )}
        />
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/chat"
          render={()=>(
            (state.isLoggedIn==true) 
            ?
            <Chat />
            :
            <Redirect to="/login" />
          )}
        />
        <Route path="/logout"
          render={()=>(
            (state.isLoggedIn==true) 
            ?
            <Logout />
            :
            <Redirect to="/login" />
          )}
        />
      </BrowserRouter>
  );
}

export default App;
