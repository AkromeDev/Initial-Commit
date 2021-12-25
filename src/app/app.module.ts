import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetricsModule } from './metrics/metrics.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetricsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
