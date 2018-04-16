import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'lodash';
import { Observable } from 'rxjs/Observable';
import { map as rxmap } from 'rxjs/operators';
import { ApiConfiguration } from '../config';
import { GetInvoicesResponse } from './data.response';
import { Invoice } from './invoice';

@Injectable()
export class InvoiceDataService {
    private readonly _http: HttpClient;
    private readonly _config: ApiConfiguration;

    constructor(http: HttpClient,
        config: ApiConfiguration) {
        this._http = http;
        this._config = config;
    }

    public invoices(): Observable<Invoice[]> {
        const mapper = (invoice: GetInvoicesResponse) => new Invoice(invoice);
        return this._http.get<GetInvoicesResponse[]>(this._config.invoices)
            .pipe(rxmap(invoices => (map(invoices, mapper))));
    }

    public invoice(id: number): Observable<Invoice> {
        return this._http.get<GetInvoicesResponse>(this._config.invoice(id))
            .pipe(rxmap(invoice => new Invoice(invoice)));
    }
}
