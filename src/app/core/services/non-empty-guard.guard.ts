import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {PanierService} from "./panier.service";

@Injectable({
  providedIn: 'root'
})
export class NonEmptyGuardGuard implements CanActivate {
  constructor(private panierService: PanierService){}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return !this.panierService.isEmpty();
  }
}
