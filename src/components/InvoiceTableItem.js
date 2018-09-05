import React, { Component } from 'react';
import {connect } from 'react-redux';
import {DELETE_INVOICE} from '../types';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import InvoiceEdit from './InvoiceEdit';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


//  Вылазит ошибка для чего делается это ???

// https://github.com/reactjs/react-modal
// Modal.setAppElement('#yourAppElement')


class InvoiceTableItem extends Component {
	constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }


  closeModal = () => {
    this.setState({modalIsOpen: false});
	}
	



	deleteItem = () => {
		this.props.onDeleteInvoice(this.props.dataItem.id);
	}

	render(){
		return(
			<tr>
	      <td >{this.props.dataItem.date_created}</td>
	      <td>{this.props.dataItem.number}</td>
	      <td>{this.props.dataItem.date_supply}</td>
	      <td className="cell-text">{this.props.dataItem.comment}</td>
	      <td>
	      	<button type="button" className="btn btn-default mr-3" onClick={this.openModal}>Edit</button>
	      	<button type="button" className="btn btn-danger" onClick={this.deleteItem}>Delete</button>
	      </td>
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>

					<InvoiceEdit invoice={this.props.dataItem} onCloseModal={this.closeModal}/>
				</Modal>
			</tr>
		)
	}

}

export default connect(
	state => ({}),
  dispatch => ({
		onDeleteInvoice: (invoice) => {
  		dispatch({type: DELETE_INVOICE, payload: invoice});
  	}
  })
)(InvoiceTableItem);