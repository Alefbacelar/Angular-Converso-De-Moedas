import { ConversoService } from './../services/converso.service';
import { MoedaService } from './../services/moeda.service';
import { ConversorComponent } from './conversor.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorRoutingModule } from './conversor-routing.module';


@NgModule({
  declarations: [
   /*  ConversorComponent */
  ],
  imports: [
    CommonModule,
    ConversorRoutingModule
  ],
  providers: [
    MoedaService,
    ConversoService
  ]
 /*  exports: [
    ConversorComponent
  ], */
})
export class ConversorModule { }
