import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends Component {

	componentDidMount() {
		this.props.fetchStreams();
	}

	renderAdmin(stream) {
		if( stream.userId === this.props.currentUserId ) {
			return (
				<div className="pt-2 pb-2">
					<Link to={`/streams/${stream.id}`} className="right floated content ui button mini positive">
						<i aria-hidden="true" className="eye icon"></i>Watch
					</Link>
					<Link to={`/streams/edit/${stream.id}`} className="ui basic button mini positive">
						<i aria-hidden="true" className="edit icon"></i>Edit
					</Link>
					<Link to={`/streams/delete/${stream.id}`} className="ui basic button mini ">
						<i aria-hidden="true" className="delete icon"></i>Delete
					</Link>
				</div>
			)
		} else {
				return (
					<div className="right floated content pt-2 pb-2">
					<Link to={`/streams/${stream.id}`} className="right floated content ui button mini positive">
						<i aria-hidden="true" className="eye icon"></i>Watch
					</Link>
					</div>
				)
			}
	}

	renderList() {
		return this.props.streams.map(stream => {
			return (
				<div className="ui celled list mb-4" key={stream.id}>
				<div className="item">
					<i className="large middle aligned icon play circle outline" />
					<div className="content">
						<Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
						<div className="description">{stream.description}</div>
					</div>
					{this.renderAdmin(stream)}
				</div>
				</div>
			)
		})
	}

	renderCreateButton() {
		if(this.props.isSignedIn) {
			return (
				<div style={{ textAlign: "right", marginBottom: "15px"}}>
				<div className="ui icon labeled vertical buttons">
					<Link to="/streams/new" className="ui basic button green large">
						<i aria-hidden="true" className="play icon"></i>Create stream
					</Link>
				</div>
				</div>
			)
		}
	}

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div >{this.renderList()}</div>
				{this.renderCreateButton()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { 
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	}
}


export default connect(mapStateToProps, { fetchStreams })(StreamList);