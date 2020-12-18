import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

//firebase part
import firebase from 'firebase';
import fbConfig from './components/firebase/Firebase';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux'
import thunk from 'redux-thunk'

import AuthReducer from './store/reducers/Auth';
import * as AuthActions from './store/actions/Auth';

const rootReducers = combineReducers({
  auth:AuthReducer
})
const store = createStore(rootReducers, applyMiddleware(thunk))

//set document title
document.title = "React Socket Chat"

//firebase config
if(!firebase.apps.length)
    firebase.initializeApp(fbConfig);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
