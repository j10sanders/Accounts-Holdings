const _ = require('lodash');

const accountFormater = (accounts, holdings) => {
	let resultAccounts = {}
	for (let a of accounts){
		for (let p of holdings){
			if (p['account_id'] == a['id']){ 
				if (a['type'] in resultAccounts){
					resultAccounts[a['type']].push(p)
				}else{resultAccounts[a['type']] = [p]}
			}
		}
	}
	return resultAccounts
}

const accrue = (resultAccounts) => {
 	let accrued = {}
	for (let [key, value] of Object.entries(resultAccounts)) {
		for (let val of value){
			if (key in accrued){
				accrued[key] += val['price'] * val['quantity']
			}else{accrued[key] = val['price'] * val['quantity']}
		}
	}
	//{529: 14373.627672728635, 401k: 3945.54317783033, Brokerage Account: 19440.2184779855, Roth 401k: 8603.704431365213}
	return accrued
}

const percentages = (accrued) => {
	let percents = []
	let total = _.sum(_.values(accrued))
	for (let [key, value] of Object.entries(accrued)) {
		percents.push([key, value, (value/total) * 100])
	}
	//{529: 31.00230486593964, 401k: 8.510094684928154, Brokerage Account: 41.93037371202248, Roth 401k: 18.557226737109733}
	return percents
}

export const byValue = (accounts, holdings) => {
	return percentages(accrue(accountFormater(accounts, holdings)))
}