import './styles/main.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HoldingsTable from './components/holdingsTable';
import AccountByValue from './components/accountValues';
import {AccountFormater} from './scripts/resources/dataFormatter';
import {Positions} from './data/holdings';
import {Accounts} from './data/accounts';

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      			<header className="mdl-layout__header">
        			<div className="mdl-layout__header-row">
			     	<span className="mdl-layout-title">Quovo Coding Challenge</span>
			    	</div>
			  	</header>
			  	<main className="mdl-layout__content">
			    	<div className="page-content">
				    	<div id='accounts'>
				    		<h4>Holdings</h4>
				    		<HoldingsTable positions={Positions} />
				    	</div>
						<div id='holdings'>
							<h4>Account Type by Value</h4>
							<AccountByValue positions={Positions} accounts={Accounts} />
						</div>
					</div>
			  </main>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('content'));