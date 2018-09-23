import React, { Component } from 'react';
import {routes} from '../routes/routes.js';

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
	if (nextView !== undefined){
      state = {
	    view: nextView
	  };
	}
	else {
	  state = {
	    view: routes.Default
	  };
	}
	this.setState(state);	
  }

  render(){
	return(
	  <this.state.view navigator={this}/>
	);
  }

}

export default Navigator;
