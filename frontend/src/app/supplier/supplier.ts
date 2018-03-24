import { GetSuppliersResponse } from './supplier.data.response';

export class Supplier {
    private _id: number;

    public get id() {
        return this._id;
    }

    public name: string;

    constructor(response?: GetSuppliersResponse) {
        if (response) {
            this._id = response.id;
            this.name = response.name;
        }
    }

    public toString() {
        return this.name;
    }
}
