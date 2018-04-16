import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ApiConfiguration } from './../config';
import { LineItemCreateComponent } from './create.component';
import { LineItemDataService } from './data.service';
import { LineItemComponent } from './detail.component';
import { LineItemsComponent } from './index.component';
import { LineItemUpdateComponent } from './update.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        NgxDatatableModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [
        LineItemsComponent,
        LineItemComponent,
        LineItemCreateComponent,
        LineItemUpdateComponent
    ],
    providers: [
        ApiConfiguration,
        LineItemDataService
    ],
    exports: [
        LineItemsComponent
    ],
    entryComponents: [
        LineItemCreateComponent,
        LineItemUpdateComponent
    ]
})
export class LineItemModule {}
