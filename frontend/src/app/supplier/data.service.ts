import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'lodash';
import { Observable } from 'rxjs/Observable';
import { map as rxmap } from 'rxjs/operators';
import { ApiConfiguration } from '../config';
import { GetSuppliersResponse } from './data.response';
import { Supplier } from './supplier';

@Injectable()
export class SupplierDataService {
    private readonly _http: HttpClient;
    private readonly _config: ApiConfiguration;

    constructor(http: HttpClient,
        config: ApiConfiguration) {
        this._http = http;
        this._config = config;
    }

    public suppliers(): Observable<Supplier[]> {
        const mapper = (supplier: GetSuppliersResponse) => new Supplier(supplier);
        return this._http.get<GetSuppliersResponse[]>(this._config.suppliers)
            .pipe(rxmap(suppliers => (map(suppliers, mapper))));
    }
}
