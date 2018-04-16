import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
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
        NgxDatatableModule,
        LineItemModule
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
