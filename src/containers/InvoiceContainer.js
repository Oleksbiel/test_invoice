import React, { Component } from 'react';
import {connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import InvoiceTable from '../components/InvoiceTable';


class InvoiceContainer extends Component{
	

	render(){

		// console.log(this.props.invoices);

		return(
				<div className="container mb-5">
					<section className="">
							<h2 className="mb-3">Invoices</h2>
							<div className="card mb-3">
								<div className="card-header">
									<h5>Actions</h5>

								</div>
								<div className="card-body">
									<NavLink to="/add" className="btn  btn-primary">Add new</NavLink>
								</div>
							</div>
							<div className="card">
								<div className="card-header">
									<h5>Invoices</h5>
								</div>
								<div className="card-body pt-0">
									<InvoiceTable data={this.props.invoices} />
								</div>
							</div>
					</section>
				</div>
		)
	}
} 


export default connect(
  state => ({
  		invoices: state.invoices
  }),
  dispatch=> ({

  })
)(InvoiceContainer);