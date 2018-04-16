import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'lodash';
import { Observable } from 'rxjs/Observable';
import { map as rxmap } from 'rxjs/operators';
import { ApiConfiguration } from '../config';
import { GetLineItemsResponse } from './data.response';
import { LineItem } from './line-item';

@Injectable()
export class LineItemDataService {
    private readonly _http: HttpClient;
    private readonly _config: ApiConfiguration;

    constructor(http: HttpClient,
        config: ApiConfiguration) {
        this._http = http;
        this._config = config;
    }

    public create(lineItem: LineItem) {
        return this._http.post(this._config.line_items(lineItem.invoice_id), lineItem.toCreate());
    }

    public update(lineItem: LineItem) {
        return this._http.put(this._config.line_item(lineItem.id), lineItem.toUpdate());
    }

    public line_items(invoice_id: number): Observable<LineItem[]> {
        const mapper = (line_items: GetLineItemsResponse) => new LineItem(line_items);
        return this._http.get<GetLineItemsResponse[]>(this._config.line_items(invoice_id))
            .pipe(rxmap(invoices => (map(invoices, mapper))));
    }
}
