import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetricsModule } from './metrics/metrics.module';
import { CollectionsModule } from './collections/collections.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetricsModule,
    CollectionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
