import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms'

import { AppComponent } from './app.component';
import { NgxRocketMaskDirective } from './ngx-rocket-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgxRocketMaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
