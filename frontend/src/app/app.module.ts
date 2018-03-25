import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { ApiConfiguration } from './config';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        AppRoutingModule
    ],
    providers: [ ApiConfiguration ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
