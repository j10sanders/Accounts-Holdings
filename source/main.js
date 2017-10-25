import './styles/main.css';
// import './scripts/example';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AccountsTable from './components/accountsTable';
import HoldingsTable from './components/holdingsTable';
import {AccountFormater} from './scripts/resources/dataFormatter';
import {Positions} from './data/holdings';
import {Accounts} from './data/accounts';

class App extends Component {
	constructor() {
		super();
		this.state = { 
		};
	}

	render() {
		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header mdl-layout__header--scroll">
        <div className="mdl-layout__header-row">
			     	<span className="mdl-layout-title">Quovo Coding Challenge</span>
			    	</div>
			  	</header>
			  	<main className="mdl-layout__content">
			    	<div className="page-content">
				    	<div id='accounts'><h4>Holdings</h4><AccountsTable /></div>
						<div id='holdings'><h4>Account Type by Value</h4><HoldingsTable /></div>
					</div>
			  </main>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('content'));