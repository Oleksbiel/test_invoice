import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {connect } from 'react-redux';
import {ADD_INVOICE} from '../types';
import {withRouter} from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';


class InvoiceSingleCreate extends Component {

	constructor (props) {
    super(props)
    this.state = {
			values: {
				invoiceNumber: '',
				invoiceDate: moment(),
				invoiceSupplyDate: moment(),
				invoiceComment: ''
			},
			errors: {}
    };
	}
	

	dateHandleChange = (name, date) => {

    this.setState({
      values: {
				...this.state.values ,
				[name]: date
			}
		})
    
	}
	inputHandleChange = e => {

		this.setState({
			values: {
				...this.state.values ,
				[e.target.name]: e.target.value
			}
		});

	}

	validate = () => {
		const {values} = this.state;
		const errors = {};
		
	
		if(values.invoiceNumber == ''){
			errors.invoiceNumber = 'The field is required.';
		}
		if (values.invoiceComment == ''){
			errors.invoiceComment = 'The field is required.';
		}
		
		this.setState({errors},this.formValid);
		
	}

	formValid = () => {
		if(!Object.keys(this.state.errors).length){
			const invoice = {};

			invoice.id = this.uniqID();
			invoice.date_created = moment(this.state.values.invoiceDate).format('D MMMM YYYY') ;
			invoice.date_supply = moment(this.state.values.invoiceSupplyDate).format('D MMMM YYYY');
			invoice.comment = this.state.values.invoiceComment;
			invoice.number = this.state.values.invoiceNumber;

			this.props.onAdddInvoice(invoice);
			
			this.props.history.push('/')

		}
	}
	
	
	/// Наплужил с сохранением формы , непойму как упростить


	uniqID =  () => {
		return '_' + Math.random().toString(36).substr(2, 9);
	};


	render(){
		const { values , errors } = this.state

		return(
			<div className="container">
				<h2 className="mb-3">Invoice Create new</h2>
				<div className="card">
					<div className="card-body">
						<form>
							<div className="row">
								<div className="col-6">
									<div className="form-group">
										<label>Number</label>
										<input type="text" className="form-control" name="invoiceNumber" onChange={this.inputHandleChange} value={values.invoiceNumber}/>
										<div className="text-danger">{errors.invoiceNumber}</div>
									</div>
								</div>
								<div className="col-6">
									<div className="form-group">
										<label>Invoice Date:</label>
										<DatePicker
												className="form-control"
												selected={values.invoiceDate}
												onChange={this.dateHandleChange.bind(this , 'invoiceDate' )}
												name="invoiceDate"
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="form-group">
										<label>Supply date:</label>
										<DatePicker
												className="form-control"
												selected={values.invoiceSupplyDate}
												onChange={this.dateHandleChange.bind(this , 'invoiceSupplyDate' )}
												name="invoiceSupplyDate"
										/>
									</div>
								</div>
								<div className="col-12">
									<div className="form-group">
										<label>Comment:</label>
										<textarea className="form-control" name="invoiceComment" value={values.invoiceComment} onChange={this.inputHandleChange}/>
										<div className="text-danger">{errors.invoiceComment}</div>
									</div>
								</div>


							</div>
							<div className="text-right mt-5">
								<button type="button" className="btn btn-success" onClick={this.validate}>Save</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}

}

export default withRouter(connect(
	state => ({}),
  dispatch => ({
		onAdddInvoice: (invoice) => {
  		dispatch({type: ADD_INVOICE, payload: invoice});
  	}
  })
)(InvoiceSingleCreate));