import { assign, forOwn, has, keys } from 'lodash';
import { GetInvoicesResponse } from './data.response';

export class Invoice {
    private _id: number;

    public get id() {
        return this._id;
    }

    public supplier_id: number;
    public supplier_name: string; // cannot be edited in an invoice
    public order_number: string;
    public order_date: Date;
    public order_shipped_date?: Date;
    public order_received_date?: Date;
    public discount_amount: number;
    public shipping_amount: number;
    public invoiced_amount: number;
    public billed_amount: number; // cannot be edited in an invoice

    constructor(response?: GetInvoicesResponse) {
        if (response) {
            this._id = response.id;
            this.supplier_id = response.supplier_id;
            this.supplier_name = response.supplier_name;
            this.order_number = response.order_number;
            this.order_date = response.order_date;
            this.order_shipped_date = response.order_shipped_date;
            this.order_received_date = response.order_received_date;
            this.discount_amount = response.discount_amount;
            this.shipping_amount = response.shipping_amount;
            this.billed_amount = response.billed_amount;
        }
    }

    public toString() {
        return `${this.id}-${this.order_number}`;
    }
}
