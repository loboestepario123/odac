import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { PresentacionComponent } from './components/presentacion/presentacion.component';

@NgModule({
  declarations: [
    PresentacionComponent
  ],
  imports: [CommonModule, InicioRoutingModule],
  exports: [
    PresentacionComponent
  ],
})
export class InicioModule {}
