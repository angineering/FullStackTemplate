import React from "react";

var $ = require('jquery');

export default class Hello extends React.Component {
	constructor(props) {
		super(props);
		this.state = {greeting: "Hello " + this.props.name};
	}

	componentDidMount() {
		this.getPythonHello();
	}

	getPythonHello() {
		$.get(window.location.href + 'hello', (data) => {
			console.log(data);
			this.setState({greeting: data});
		});
	}
	
	render () {
        return <h1> {this.state.greeting} </h1>;
    }
}
