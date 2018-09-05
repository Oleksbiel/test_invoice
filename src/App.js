import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Route , Switch } from 'react-router-dom';
import store from './store'

import InvoiceContainer from './containers/InvoiceContainer';
import InvoiceSingleCreate from './components/InvoiceSingleCreate';

import './assets/css/bootstrap.min.css';
import './index.css';


class App extends Component {
  render() {
    return (
       <Provider store={store}>
          <BrowserRouter>
            <div className="pt-5">
              <Switch>
                <Route path="/" component={InvoiceContainer}  exact  /> 
                <Route path="/add" component={InvoiceSingleCreate}  exact  /> 
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;


                // <Route path="/about" component={AboutPage}  exact  /> 
                // <Route path="/tickets" component={TicketsPage} exact  /> 
                // <Route path="/tickets/:id" component={TicketsSinglePage}   /> 
                // <Route component={ErrorPage} /> 


