import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogRoutingModule} from "./catalog/catalog-routing.module";

const routes: Routes = [
  {path: 'panier', loadChildren: './panier/panier.module#PanierModule'},
  {path: '', redirectTo: 'catalog', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    CatalogRoutingModule,
    RouterModule
  ]
})
export class AppRoutingModule { }
