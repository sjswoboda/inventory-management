import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from './invoice';


@Component({
    templateUrl: './detail.component.html'
})
export class InvoiceComponent implements OnInit {
    private readonly _route: ActivatedRoute;
    private _invoice: Invoice;
    public get invoice(): Invoice {
        return this._invoice;
    }

    constructor(route: ActivatedRoute) {
        this._route = route;
    }

    public ngOnInit(): void {
        this._route.data.subscribe((data: { invoice: Invoice }) => {
            this._invoice = data.invoice;
        });
    }
}
