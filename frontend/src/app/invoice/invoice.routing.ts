import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './invoices.component';
import { InvoicesResolver } from './invoices.resolver';

const routes: Routes = [
    {
        path: '',
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
