import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetricsModule } from './metrics/metrics.module';
import { CollectionsModule } from './collections/collections.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalModule } from './modal/modal.module';
import { ViewsModule } from './views/views.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetricsModule,
    CollectionsModule,
    ViewsModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
