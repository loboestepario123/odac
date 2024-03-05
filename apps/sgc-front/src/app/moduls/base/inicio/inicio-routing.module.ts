import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
