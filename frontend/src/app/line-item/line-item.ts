import { GetLineItemsResponse } from './line-item.data.response';
export class LineItem {
    private _id: number;

    public get id() {
        return this._id;
    }
    public invoice_id: number;
    public description: string;
    public quantity: number;
    public lot_size: number;
    public discount_amount: number;
    public shipping_amount: number;
    // public notes: string;
    // public received_date: Date;

    constructor(response?: GetLineItemsResponse) {
        if (response) {
            this._id = response.id;
            this.invoice_id = response.invoice_id;
            this.description = response.description;
            this.quantity = response.quantity;
            this.lot_size = response.lot_size;
            this.discount_amount = response.discount_amount;
            this.shipping_amount = response.shipping_amount;
        }
    }

    public toString() {
        return this.description;
    }
}
