import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from './invoice';

@Component({
    selector: 'app-invoices',
    templateUrl: './index.component.html'
})
export class InvoicesComponent implements OnInit {
    private readonly _route: ActivatedRoute;
    private _invoices: Invoice[];
    public get invoices(): Invoice[] {
        return this._invoices;
    }

    constructor(route: ActivatedRoute) {
        this._route = route;
    }

    ngOnInit(): void {
        this._route.data.subscribe((data: { invoices: Invoice[] }) => {
            this._invoices = data.invoices;
        });
    }
}
