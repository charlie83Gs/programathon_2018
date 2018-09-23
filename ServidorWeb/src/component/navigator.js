import React, { Component } from 'react';
import {routes} from '../routes/routes.js';

//session stuff
import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
 
import { createStore } from 'redux';
import { sessionService } from 'redux-react-session';


const reducers = {
  // ... your other reducers here ...
  session: sessionReducer
};
const reducer = combineReducers(reducers);

const store = createStore(reducer)
 
sessionService.initSessionService(store);


class Navigator extends Component {
  constructor(props){
    super(props);
	if (this.props.view !== undefined){
	  this.state = {
	    view: this.props.view
	  };
	}
	else{
	  this.state = {
	    view: routes.Default
	  };	
	}
  }

  goToView(nextView){
		var state;
  	 		if(nextView !== undefined){
	  	 		state = {
				view: nextView
			};
			}else{
				state = {
				view: routes.Default
			};

  	 }
  	 
	  
	  this.setState(state);
	}
		
  

  render(){
  	let id = localStorage.getItem('session-id');
  	//console.log(id);
  	if(!(typeof id === "undefined") && this.state.view === routes.Login){
  		this.goToView(routes.Home);
  	}
	return(
	  <this.state.view navigator={this}/>
	);
  }


}

export default Navigator;
