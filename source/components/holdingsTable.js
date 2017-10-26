import React, {Component} from 'react';
import Handsontable from 'handsontable';
require('handsontable/dist/handsontable.full.css');
import {customNumber, percentage} from './../scripts/resources/renderers';

class HoldingsTable extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this.hot = new Handsontable(this.refs.holdingsTable, {
			data: this.props.positions,
			colHeaders: ['account_id', 'ticker_name', 'ticker', 'price', 'quantity'],
			columns: [
				{data: 'account_id'},
				{data: 'ticker_name'},
				{data: 'ticker'},
				{data: 'price', renderer: customNumber},
				{data: 'quantity'},
			],
		})
	}

	render() {
		return (
			<div ref='holdingsTable'></div>
		);
	}
}

export default HoldingsTable;
