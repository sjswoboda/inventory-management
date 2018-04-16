import { Component, Input, OnInit } from '@angular/core';
import { LineItemDataService } from './data.service';
import { LineItem } from './line-item';

@Component({
    selector: 'app-line-item',
    templateUrl: './detail.component.html'
})
export class LineItemComponent implements OnInit {
    private readonly _dataService: LineItemDataService;

    @Input()
    public lineItem: LineItem;

    constructor(data: LineItemDataService) {
        this._dataService = data;
    }

    public ngOnInit(): void {
    }
}
