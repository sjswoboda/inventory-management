import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierComponent } from './supplier.component';
import { SuppliersResolver } from './suppliers.resolver';

const routes: Routes = [
    {
        path: '',
        component: SupplierComponent,
        resolve: {
            suppliers: SuppliersResolver
        }
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class SupplierRoutingModule {}
