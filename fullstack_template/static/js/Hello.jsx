import React from "react";
import { Button } from "react-bootstrap";

var $ = require('jquery');

export default class Hello extends React.Component {
	constructor(props) {
		super(props);
		this.state = {greeting: "Hello " + this.props.name};

		// This binding is necessary to make `this` work in the callback
		this.getPythonHello = this.getPythonHello.bind(this);
	}

	getPythonHello() {
		$.get(window.location.href + 'hello', (data) => {
			console.log(data);
			this.setState({greeting: data});
		});
	}
	
	render () {
        return (
			<div>
			<h1>{this.state.greeting}</h1>
			<Button bsSize="large" bsStyle="primary" onClick={this.getPythonHello}>
			Click for a new Greeting!
			</Button>
			</div>
		);
    }
}
