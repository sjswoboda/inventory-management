import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { InvoiceResolver } from './invoice.resolver';
import { InvoicesComponent } from './invoices.component';
import { InvoicesResolver } from './invoices.resolver';

const routes: Routes = [
    {
        path: ':id',
        component: InvoiceComponent,
        resolve: {
            invoice: InvoiceResolver
        }
    },
    {
        path: '',
        pathMatch: 'full',
        component: InvoicesComponent,
        resolve: {
            invoices: InvoicesResolver
        }
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class InvoiceRoutingModule {}
