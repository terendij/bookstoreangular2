import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanierRoutingModule } from './panier-routing.module';
import {PanierRootComponent} from "./panier-root/panier-root.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PanierContentComponent } from './panier-content/panier-content.component';
import { PanierOrderComponent } from './panier-order/panier-order.component';
import { PanierOrderReactiveComponent } from './panier-order-reactive/panier-order-reactive.component';
import {WidgetsModule} from "../core/widgets/widgets.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetsModule,
    PanierRoutingModule
  ],
  declarations: [
    PanierRootComponent,
    PanierContentComponent,
    PanierOrderComponent,
    PanierOrderReactiveComponent
  ]
})
export class PanierModule { }
