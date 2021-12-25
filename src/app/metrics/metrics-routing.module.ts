import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricsHomeComponent } from './metrics-home/metrics-home.component';

const routes: Routes = [
  { path: 'metrics', component: MetricsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetricsRoutingModule { }
