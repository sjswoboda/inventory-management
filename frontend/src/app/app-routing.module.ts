import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'suppliers',
        loadChildren: './supplier/module#SupplierModule'
    },
    {
        path: 'invoices',
        loadChildren: './invoice/module#InvoiceModule'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
