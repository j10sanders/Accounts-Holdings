export function customNumber(instance, td, row, col, prop, value, cellProperties){
	if(value != null && value != ""){
		let newVal = new Intl.NumberFormat('en-US', {maximumFractionDigits: 2}).format(value)
		td.innerHTML = newVal
	}
}

export function percentage(instance, td, row, col, prop, value, cellProperties){
	if(value != null && value != ""){
		let newVal = new Intl.NumberFormat('en-US', {maximumFractionDigits: 2}).format(value)
		td.innerHTML = `${newVal}%`
	}
}