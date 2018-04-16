import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SupplierDataService } from './data.service';
import { Supplier } from './supplier';

export class SuppliersResolver implements Resolve<Supplier[]> {
    private readonly _dataService: SupplierDataService;
    constructor(data: SupplierDataService) {
        this._dataService = data;
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Supplier[]> {
        return this._dataService.suppliers();
    }
}
