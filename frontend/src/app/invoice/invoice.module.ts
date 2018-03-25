import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ApiConfiguration } from './../config';
import { InvoiceDataService } from './invoice.data.service';
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
    declarations: [ InvoicesComponent ],
    providers: [
        ApiConfiguration,
        InvoiceDataService,
        InvoicesResolver
    ],
    exports: [ InvoicesComponent ]
})
export class InvoiceModule {}
