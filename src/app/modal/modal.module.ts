import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalHomeComponent } from './modal-home/modal-home.component';


@NgModule({
  declarations: [
    ModalHomeComponent
  ],
  imports: [
    CommonModule,
    ModalRoutingModule
  ]
})
export class ModalModule { }
