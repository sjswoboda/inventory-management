import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ApiConfiguration } from './../config';
import { SupplierDataService } from './data.service';
import { SuppliersComponent } from './index.component';
import { SuppliersResolver } from './index.resolver';
import { SupplierRoutingModule } from './routing';

@NgModule({
    imports: [
        CommonModule,
        SupplierRoutingModule,
        MatTableModule,
        MatSortModule
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
