import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'suppliers',
        loadChildren: './supplier/supplier.module#SupplierModule'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { enableTracing: false}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
