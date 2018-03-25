import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from './invoice';


@Component({
    selector: 'app-invoices',
    templateUrl: './invoices.component.html'
})
export class InvoicesComponent implements OnInit {
    private _invoices: Invoice[];
    public get invoices(): Invoice[] {
        return this._invoices;
    }

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.data.subscribe((data: { invoices: Invoice[] }) => {
            this._invoices = data.invoices;
        });
    }
}
