import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {

	renderError({ error, touched }) {
			if (touched && error) {
				return (
					<div className="ui error message mt-2 w-50">
						<div className="header">{error}</div>
					</div>
				)
			}
		}

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off"/>
				<div>{this.renderError(meta)}</div>
			</div>
		)
	}

	onSubmit = (formValues) => {
		// console.log(formValues)
		this.props.onSubmit(formValues);
	}

	render() {
		// console.log(this.props)
		return (
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field name="title" component={this.renderInput} label="Enter Title"/>
				<Field name="description" component={this.renderInput} label="Enter Description"/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const error = {};

	if (!formValues.title) {
		error.title = 'You must enter a title';
	}

	if (!formValues.description) {
		error.description = 'You must enter a description';
	}

	return error;
}

export default reduxForm({ form: 'streamForm', validate })(StreamForm);

