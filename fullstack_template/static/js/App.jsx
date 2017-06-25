import React from "react";
import Hello from "./Hello"

var $ = require('jquery');

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
        return <Hello name='Rimini' />;
    }
}
