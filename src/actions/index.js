
import {EDIT_INVOICE, ADD_INVOICE, DELETE_INVOICE } from '../types';

export const onEditInvoice = payload => ({ type: EDIT_INVOICE, payload });
export const onAdddInvoice = payload => ({ type: ADD_INVOICE, payload });
export const onDeleteInvoice = payload => ({ type: DELETE_INVOICE, payload });


