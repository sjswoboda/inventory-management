import { GetSuppliersResponse } from './supplier.data.response';

export class Supplier {
    private _id: number;

    public get id() {
        return this._id;
    }

    public name: string;
    public amount: number;
    public pending_amount: number;

    constructor(response?: GetSuppliersResponse) {
        if (response) {
            this._id = response.id;
            this.name = response.name;
            this.amount = response.amount;
            this.pending_amount = response.pending_amount;
        }
    }

    public toString() {
        return this.name;
    }
}
