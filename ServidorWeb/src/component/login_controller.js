import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import { createStore } from 'redux';
import { sessionService } from 'redux-react-session';

const reducers = {
	session: sessionReducer
}

const reducer = combineReducers(reducers);

const store = createStore(reducer);

const validateSession = (session) => {
	return true;
}

const options = { refreshOnCheckAuth: true, redirectPath: '/home', driver: 'COOKIES', validateSession };

sessionService.initSessionService(store, options)
.then(() => console.log('Sesión actualizada'))
.catch(() => console.log('No hay sesión activa'));

class LoginController extends Component {
  constructor(props){
	 super(props);
  }
}

export default LoginController;
