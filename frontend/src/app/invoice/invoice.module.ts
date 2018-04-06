import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ApiConfiguration } from './../config';
import { InvoiceComponent } from './invoice.component';
import { InvoiceDataService } from './invoice.data.service';
import { InvoiceResolver } from './invoice.resolver';
import { InvoiceRoutingModule } from './invoice.routing';
import { InvoicesComponent } from './invoices.component';
import { InvoicesResolver } from './invoices.resolver';

@NgModule({
    imports: [
        CommonModule,
        InvoiceRoutingModule,
        MatTableModule,
        MatSortModule
    ],
    declarations: [
        InvoiceComponent,
        InvoicesComponent
    ],
    providers: [
        ApiConfiguration,
        InvoiceDataService,
        InvoiceResolver,
        InvoicesResolver
    ],
    exports: [ InvoicesComponent ]
})
export class InvoiceModule {}
