import React, {Component} from 'react';
import Handsontable from 'handsontable';
require('handsontable/dist/handsontable.full.css');
import {byValue} from './../scripts/resources/dataFormatter';
import {customNumber, percentage} from './../scripts/resources/renderers';

class AccountByValue extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this.hot = new Handsontable(this.refs.accountByVal, {
			data: byValue(this.props.accounts, this.props.positions),
			colHeaders: ['type', 'sum', 'percent of total'],
			cells: (row, col, prop) => {
				let cellProperties = {};
				if (col == 1) {
					cellProperties.renderer = customNumber
				}
				else if (col == 2) {
					cellProperties.renderer = percentage
				}
				return cellProperties
			},
		})
	}

	render() {
		return (
			<div ref='accountByVal'></div>
		);
	}
}

export default AccountByValue;
