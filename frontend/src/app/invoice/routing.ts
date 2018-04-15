import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './detail.component';
import { InvoiceResolver } from './detail.resolver';
import { InvoicesComponent } from './index.component';
import { InvoicesResolver } from './index.resolver';

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
