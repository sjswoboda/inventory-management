import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ApiConfiguration } from './../config';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule
    ],
    declarations: [  ],
    providers: [
        ApiConfiguration
    ],
    exports: [ ]
})
export class SupplierModule {}
