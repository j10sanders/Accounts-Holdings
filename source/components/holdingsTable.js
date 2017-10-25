import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Handsontable from 'handsontable';
require('handsontable/dist/handsontable.full.css');
import {Positions} from './../data/holdings';
import {Accounts} from './../data/accounts';
import {accountFormater, accrue, percentages} from './../scripts/resources/dataFormatter';
import {customNumber, percentage} from './../scripts/resources/renderers';

class HoldingsTable extends Component {
	constructor() {
		super();
		this.state = { 
		};
	}

	componentDidMount(){
		this.hot = new Handsontable(this.refs.holdingsTable, {
			data: percentages(accrue(accountFormater({Accounts}, {Positions}))),
			colHeaders: ['type', 'sum', 'percent of total'],
			autoColumnSize: true,
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
		this.onDataUpdated()
	}

	onDataUpdated(){
		this.hot.render();
	}

	render() {
		return (
			<div ref='holdingsTable'></div>
		);
	}
}


export default HoldingsTable;
