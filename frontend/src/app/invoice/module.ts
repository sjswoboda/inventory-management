import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { LineItemModule } from '../line-item/module';
import { ApiConfiguration } from './../config';
import { InvoiceDataService } from './data.service';
import { InvoiceComponent } from './detail.component';
import { InvoiceResolver } from './detail.resolver';
import { InvoicesComponent } from './index.component';
import { InvoicesResolver } from './index.resolver';
import { InvoiceRoutingModule } from './routing';

@NgModule({
    imports: [
        CommonModule,
        InvoiceRoutingModule,
        LineItemModule,
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
