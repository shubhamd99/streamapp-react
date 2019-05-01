import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../Auth/GoogleAuth';

const Header = (props) => {
  return (
    <div className="ui stackable menu">
    <div className="item"><img src="https://react.semantic-ui.com/logo.png" alt="weblogo"/>
    </div>
    <div className="ui compact labeled icon menu">
    <Link to="/" className="item"><i aria-hidden="true" className="gamepad icon"></i>All streams</Link>
    </div>
	    <div className="right menu">
		    <div className="item">
		    	<GoogleAuth />
		    </div>
	    </div>
    </div>
    
  )
}

export default Header;