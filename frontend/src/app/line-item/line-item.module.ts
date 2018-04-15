import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiConfiguration } from './../config';
import { LineItemComponent } from './line-item.component';
import { LineItemDataService } from './line-item.data.service';
import { LineItemsComponent } from './line-items.component';

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
