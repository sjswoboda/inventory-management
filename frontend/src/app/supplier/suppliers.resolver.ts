import { SupplierDataService } from './supplier.data.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Supplier } from './supplier';
import { Observable } from 'rxjs/Observable';

export class SuppliersResolver implements Resolve<Supplier[]> {
    private readonly _dataService: SupplierDataService;
    constructor(data: SupplierDataService) {
        this._dataService = data;
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Supplier[]> {
        return this._dataService.suppliers();
    }
}
