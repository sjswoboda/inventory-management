import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from './invoice';

@Component({
    selector: 'app-invoices',
    templateUrl: './index.component.html'
})
export class InvoicesComponent implements OnInit {
    private readonly _router: Router;
    private readonly _route: ActivatedRoute;
    private _invoices: Invoice[];
    public get invoices(): Invoice[] {
        return this._invoices;
    }

    constructor(router: Router, route: ActivatedRoute) {
        this._router = router;
        this._route = route;
    }

    ngOnInit(): void {
        this._route.data.subscribe((data: { invoices: Invoice[] }) => {
            this._invoices = data.invoices;
        });
    }

    onSelect($event: { selected: Invoice[] }) {
        if ($event.selected && $event.selected.length > 0) {
            this._router.navigate(['/invoices', $event.selected[0].id]);
        }
    }
}
