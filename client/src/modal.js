import React from 'react';
import ReactDOM from 'react-dom';
import './components/App.css';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
    	<div onClick={(e) => e.stopPropagation()} className="modal-class">
    		<h3 className="header">{props.title}</h3>
    		<div className="content">
    		{props.description}
    		</div>
    		<div className="button-group">
    		{props.actions}
    		</div>
    	</div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal;