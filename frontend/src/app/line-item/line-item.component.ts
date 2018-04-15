import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LineItem } from './line-item';
import { LineItemDataService } from './line-item.data.service';

@Component({
    selector: 'app-line-item',
    templateUrl: './line-item.component.html'
})
export class LineItemComponent implements OnInit {
    private readonly _dataService: LineItemDataService;
    private _lineItems: LineItem[];
    public get lineItems(): LineItem[] {
        return this._lineItems;
    }

    @Input()
    public invoiceId: number;

    constructor(data: LineItemDataService) {
        this._dataService = data;
    }

    public ngOnInit(): void {
        this.getLineItems();
    }

    private getLineItems() {
        this._dataService.line_items(this.invoiceId).subscribe((result) => this._lineItems = result);
    }
}
