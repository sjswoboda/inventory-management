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
            this.invoice_id = response.invoice_id;
        }
    }
}
