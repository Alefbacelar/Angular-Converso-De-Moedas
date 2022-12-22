import { ConversoModule } from './pages/converso/components/converso.module';
import { ConversoComponent } from './pages/converso/components/converso.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ConversoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ConversoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
