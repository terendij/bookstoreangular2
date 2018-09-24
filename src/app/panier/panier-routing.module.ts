import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PanierRootComponent} from "./panier-root/panier-root.component";
import {PanierContentComponent} from "./panier-content/panier-content.component";
import {PanierOrderComponent} from "./panier-order/panier-order.component";
import {PanierOrderReactiveComponent} from "./panier-order-reactive/panier-order-reactive.component";
import {NonEmptyGuardGuard} from "../core/services/non-empty-guard.guard";

const routes: Routes = [
  { path: '', //avant il y avait panier mais vu qu'on a virer le chargement du panier au démarrage il ne faut pas se retrouver avec /panier/panier/content
    component: PanierRootComponent,
    children:[
      {path: 'content', component: PanierContentComponent},
      {path: 'order', component: PanierOrderComponent, canActivate: [NonEmptyGuardGuard]},
      {path: 'reactive', component: PanierOrderReactiveComponent},
      {path: 'content', component: PanierContentComponent},
      {path: '', redirectTo: 'content', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanierRoutingModule { }
