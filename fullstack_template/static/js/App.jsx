import React from "react";
import Hello from "./Hello";
import { PageHeader, Grid, Row, Col } from "react-bootstrap";

require('../css/fullstack.css');

var $ = require('jquery');

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
        return (
			<PageHeader>
				<Hello name='Rimini' />
			</PageHeader>
		);
    }
}
