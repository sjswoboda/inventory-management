import { forOwn } from 'lodash';
import { GetInvoicesResponse } from './invoice.data.response';

export class Invoice {
    private _id: number;

    public get id() {
        return this._id;
    }

    public supplier_id: number;
    public supplier_name: string; // cannot be edited
    public order_number: string;
    public order_date: Date;
    public order_shipped_date: Date;
    public order_received_date: Date;
    public discount_amount: number;
    public shipping_amount: number;
    public invoiced_amount: number;
    public billed_amount: number; // cannot be edited

    constructor(response?: GetInvoicesResponse) {
        if (response) {
            this._id = response.id;
            this.order_number = response.order_number;
            this.supplier_name = response.supplier_name;
            this.billed_amount = response.billed_amount;
        }
    }

    public toString() {
        return `${this.id}-${this.order_number}`;
    }
}
