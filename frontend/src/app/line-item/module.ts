import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiConfiguration } from './../config';
import { LineItemDataService } from './data.service';
import { LineItemComponent } from './detail.component';
import { LineItemsComponent } from './index.component';

@NgModule({
    imports: [
        CommonModule
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
