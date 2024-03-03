import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulsRoutingModule } from './moduls-routing.module';
import { BaseModule } from './base/base.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulsRoutingModule
  ],
  exports:[
    BaseModule
  ]
})
export class ModulsModule { }
