import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import { EtoilePipe } from './etoile.pipe';
import { RatingComponent } from './rating/rating.component';
import { BuyBookComponent } from './buy-book/buy-book.component';
import {MatBadgeModule, MatButtonToggleModule, MatIconModule, MatMenuModule, MatTabsModule} from "@angular/material";
import { PanierInfosComponent } from './panier-infos/panier-infos.component';
import { ErrorComponent } from './error/error.component';
import { FieldsComponent } from './fields/fields.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatTabsModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonToggleModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    RatingComponent,
    EtoilePipe,
    BuyBookComponent,
    PanierInfosComponent,
    ErrorComponent,
    FieldsComponent
  ],
  exports: [
    MenuComponent,
    RatingComponent,
    BuyBookComponent,
    EtoilePipe,
    PanierInfosComponent,
    ErrorComponent,
    FieldsComponent
  ]
})
export class WidgetsModule { }
