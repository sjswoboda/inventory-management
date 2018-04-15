import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersComponent } from './index.component';
import { SuppliersResolver } from './index.resolver';

const routes: Routes = [
    {
        path: '',
        component: SuppliersComponent,
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
