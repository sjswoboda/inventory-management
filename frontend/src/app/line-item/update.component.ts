import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../invoice/invoice';
import { LineItemDataService } from './data.service';
import { LineItem } from './line-item';

@Component({
    templateUrl: './create.component.html'
})
export class LineItemUpdateComponent {
    private readonly _dialogRef: MatDialogRef<LineItemUpdateComponent>;
    private readonly _dataService: LineItemDataService;
    public readonly invoice: Invoice;
    public readonly model: LineItem;

    constructor(dialogRef: MatDialogRef<LineItemUpdateComponent>,
        @Inject(MAT_DIALOG_DATA) data: any,
        dataService: LineItemDataService) {
        this._dialogRef = dialogRef;
        this._dataService = dataService;
        this.invoice = data.invoice;
        this.model = data.lineItem;
    }

    public save() {
        this._dataService.update(this.model).subscribe((result) => this._dialogRef.close(true));
    }
}
