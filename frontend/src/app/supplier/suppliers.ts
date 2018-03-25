import { sumBy } from 'lodash';
import { Supplier } from './supplier';

export class Suppliers {
    private _list: Supplier[];

    public get list(): Supplier[] {
        return this._list;
    }

    public get totalSpent() {
        return sumBy(this.list, (x: Supplier) => x.amount);
    }

    public get totalPending() {
        return sumBy(this.list, (x: Supplier) => x.pending_amount);
    }

    constructor(suppliers: Supplier[]) {
        this._list = suppliers;
    }
}
