import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './Navigation/Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';

const App = (props) => {
  return (
    <div className="container-box">
    	<Router history={history}>
	    	  <Header />
          <div className="ui container">
          <Switch>
  	    	  <Route path="/" exact component={StreamList} />
  	    	  <Route path="/streams/new" component={StreamCreate} />
  	    	  <Route path="/streams/edit/:id" component={StreamEdit} />
  	    	  <Route path="/streams/delete/:id" component={StreamDelete} />
  	    	  <Route path="/streams/:id" component={StreamShow} />
          </Switch>
    	  </div>
    	</Router>
    </div>
  )
}

export default App;
