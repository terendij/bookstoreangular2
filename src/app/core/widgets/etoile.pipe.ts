import { Pipe, PipeTransform } from '@angular/core';
import {Etoile} from "../model/etoile";

@Pipe({
  name: 'etoile'
})
export class EtoilePipe implements PipeTransform {

  transform(vote: number, args?: any): string {
    return new Etoile(vote).etoiles;
  }

}
