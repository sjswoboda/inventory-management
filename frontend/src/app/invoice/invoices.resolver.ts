import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Invoice } from './invoice';
import { InvoiceDataService } from './invoice.data.service';

export class InvoicesResolver implements Resolve<Invoice[]> {
    private readonly _dataService: InvoiceDataService;
    constructor(data: InvoiceDataService) {
        this._dataService = data;
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Invoice[]> {
        return this._dataService.invoices();
    }
}
