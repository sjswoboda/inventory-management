import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Supplier } from './supplier';
import { SupplierDataService } from './supplier.data.service';

export class SuppliersResolver implements Resolve<Supplier[]> {
    private readonly _dataService: SupplierDataService;
    constructor(data: SupplierDataService) {
        this._dataService = data;
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Supplier[]> {
        return this._dataService.suppliers();
    }
}
