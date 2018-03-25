import { SupplierComponent } from './supplier.component';
import { ApiConfiguration } from './../config';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierRoutingModule } from './supplier.routing';
import { SupplierDataService } from './supplier.data.service';
import { SuppliersResolver } from './suppliers.resolver';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        CommonModule,
        SupplierRoutingModule,
        MatTableModule
    ],
    declarations: [ SupplierComponent ],
    providers: [
        ApiConfiguration,
        SupplierDataService,
        SuppliersResolver
    ],
    exports: [ SupplierComponent ]
})
export class SupplierModule {}
