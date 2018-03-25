import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ApiConfiguration } from './../config';
import { SupplierComponent } from './supplier.component';
import { SupplierDataService } from './supplier.data.service';
import { SupplierRoutingModule } from './supplier.routing';
import { SuppliersResolver } from './suppliers.resolver';

@NgModule({
    imports: [
        CommonModule,
        SupplierRoutingModule,
        MatTableModule,
        MatSortModule
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
