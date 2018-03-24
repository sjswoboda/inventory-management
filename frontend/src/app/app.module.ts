import { ApiConfiguration } from './config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './/app-routing.module';

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
