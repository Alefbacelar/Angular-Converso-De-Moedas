import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConversorModule } from './pages/converso/components';
import { ConversorComponent } from './pages/converso/components/conversor.component';
import { ModalCotacaoComponent } from './pages/converso/utils/modal-cotacao.component';
import { DataBrPipe } from './pages/converso/pipes/data-br.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConversorComponent,
    ModalCotacaoComponent,
    DataBrPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConversorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
