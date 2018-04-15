import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ApiConfiguration } from './../config';
import { LineItemDataService } from './data.service';
import { LineItemComponent } from './detail.component';
import { LineItemsComponent } from './index.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [
        LineItemsComponent,
        LineItemComponent
    ],
    providers: [
        ApiConfiguration,
        LineItemDataService
    ],
    exports: [
        LineItemsComponent
    ]
})
export class LineItemModule {}
