import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Invoice } from '../invoice/invoice';
import { LineItemCreateComponent } from './create.component';
import { LineItemDataService } from './data.service';
import { LineItem } from './line-item';
import { LineItemUpdateComponent } from './update.component';

@Component({
    selector: 'app-line-items',
    templateUrl: './index.component.html'
})
export class LineItemsComponent implements OnInit {
    private readonly _dialog: MatDialog;
    private readonly _dataService: LineItemDataService;

    private _lineItems: Observable<LineItem[]>;

    @Input()
    public invoice: Invoice;

    public get lineItems(): Observable<LineItem[]> {
        return this._lineItems;
    }

    constructor(dialog: MatDialog, data: LineItemDataService) {
        this._dataService = data;
        this._dialog = dialog;
    }

    public ngOnInit(): void {
        this.getLineItems();
    }

    public createLineItem() {
        const createDialogRef = this._dialog.open(LineItemCreateComponent, {
            data: {
                invoice: this.invoice
            }
        });
        createDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getLineItems();
            }
        });
    }

    public updateLineItem(lineItem) {
        const updateDialogRef = this._dialog.open(LineItemUpdateComponent, {
            data: {
                invoice: this.invoice,
                lineItem
            }
        });
        updateDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getLineItems();
            }
        });
    }

    public onSelect($event: { selected: LineItem[] }) {
        const lineItem = $event.selected[0];
        this.updateLineItem(lineItem);
    }

    private getLineItems() {
        this._lineItems = this._dataService.line_items(this.invoice.id);
    }
}
