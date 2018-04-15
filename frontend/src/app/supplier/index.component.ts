import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from './supplier';
import { Suppliers } from './suppliers';

@Component({
    templateUrl: './index.component.html'
})
export class SuppliersComponent implements OnInit {
    private _suppliers: Suppliers;
    public get suppliers(): Suppliers {
        return this._suppliers;
    }

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.data.subscribe((data: { suppliers: Supplier[] }) => {
            this._suppliers = new Suppliers(data.suppliers);
        });
    }
}
