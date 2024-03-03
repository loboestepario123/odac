import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { InicioModule } from './inicio/inicio.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BaseRoutingModule,
  ],
  exports:[
    InicioModule,
  ]
})
export class BaseModule { }
