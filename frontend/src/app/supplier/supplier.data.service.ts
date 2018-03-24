import { GetSuppliersResponse } from './supplier.data.response';
import { ApiConfiguration } from '../config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from './supplier';
import { Observable } from 'rxjs/Observable';
import { map as rxmap } from 'rxjs/operators';
import { map } from 'lodash';

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
        const mapper = (y: GetSuppliersResponse) => new Supplier(y);
        return this._http.get<GetSuppliersResponse[]>(this._config.suppliers)
            .pipe(rxmap(x => (map(x, mapper))));
    }
}
