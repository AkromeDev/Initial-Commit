import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetricsRoutingModule } from './metrics-routing.module';
import { MetricsHomeComponent } from './metrics-home/metrics-home.component';


@NgModule({
  declarations: [
    MetricsHomeComponent
  ],
  imports: [
    CommonModule,
    MetricsRoutingModule
  ],
})
export class MetricsModule { }
