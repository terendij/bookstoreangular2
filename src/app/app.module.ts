import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CatalogModule} from "./catalog/catalog.module";
import {HttpClientModule} from "@angular/common/http";
import {WidgetsModule} from "./core/widgets/widgets.module";
import {PanierModule} from "./panier/panier.module";
import {MatIconModule, MatTabsModule, MatToolbarModule} from "@angular/material";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CatalogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    //PanierModule, => on ne veut pas charger le panier au démarrage
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    WidgetsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
