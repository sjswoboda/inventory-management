import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from './supplier';

@Component({
    templateUrl: './supplier.component.html'
})
export class SupplierComponent implements OnInit {
    public suppliers: Supplier[];
    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.data.subscribe((data: { suppliers: Supplier[] }) => {
            this.suppliers = data.suppliers;
        });
    }
}
