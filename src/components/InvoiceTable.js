import React, { Component } from 'react';
import InvoiceTableItem from './InvoiceTableItem';


class InvoiceTable extends Component {

	render(){
		// console.log(this.props.data.invoices);
		return(
			<table className="table">
				  <thead>
				    <tr>
				    	{this.props.data.invoicesTableHeader.map((item , key) => <th key={key} >{item}</th> )}
				    </tr>
				  </thead>
				  <tbody>
				  	{this.props.data.invoices.map(item => <InvoiceTableItem key={item.id} dataItem={item}/>)}
				  </tbody>
			</table>
		)
	}

}

export default InvoiceTable;