import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Handsontable from 'handsontable';
require('handsontable/dist/handsontable.full.css');
import {Positions} from './../data/holdings';
import {customNumber, percentage} from './../scripts/resources/renderers';

class AccountsTable extends Component {
	constructor() {
		super();
		this.state = { 
		};
	}

      // "id": 93622,
      // "account_id": 52697,
      // "price": 82.866634420959,
      // "quantity": 2,
      // "ticker": "TST11",
      // "ticker_name": "Test Security 11"

	componentDidMount(){
		this.hot = new Handsontable(this.refs.accountsTable, {
			data: Positions,
			colHeaders: ['account_id', 'ticker_name', 'ticker', 'price', 'quantity'],
			columns: [
				{data: 'account_id'},
				{data: 'ticker_name'},
				{data: 'ticker'},
				{data: 'price', renderer: customNumber},
				{data: 'quantity'},
			],
		},
		)
	}

	render() {
		return (
			<div ref='accountsTable'></div>
		);
	}
}

export default AccountsTable;
