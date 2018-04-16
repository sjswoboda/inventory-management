import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ApiConfiguration } from './../config';
import { SupplierDataService } from './data.service';
import { SuppliersComponent } from './index.component';
import { SuppliersResolver } from './index.resolver';
import { SupplierRoutingModule } from './routing';

@NgModule({
    imports: [
        CommonModule,
        SupplierRoutingModule,
        NgxDatatableModule
    ],
    declarations: [ SuppliersComponent ],
    providers: [
        ApiConfiguration,
        SupplierDataService,
        SuppliersResolver
    ],
    exports: [ SuppliersComponent ]
})
export class SupplierModule {}
