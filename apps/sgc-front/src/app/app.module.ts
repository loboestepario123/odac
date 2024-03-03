import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ModulsModule } from './moduls/moduls.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes),ModulsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    ModulsModule
  ]
})
export class AppModule {}
