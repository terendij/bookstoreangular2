import {By, element} from "protractor";
import {ListPage} from "./list.po";

export class PanierPage extends ListPage{


  getTitleOnRowIndex(rowIndex: number) {
    return this.getOnRow(rowIndex, '.row-title').getText();
  }

  getQuantityOnRowIndex(rowIndex: number) {
    return this.getOnRow(rowIndex, '.row-quantity input').getAttribute('value').then(text => +text);//on cast en number et ca continue à retourner une prommesse
  }

  setQuantityOnRowIndex(rowIndex: number, newQuantity:number) {
    const input = this.getOnRow(rowIndex, '.row-quantity input');
    input.clear();
    input.sendKeys(newQuantity);
  }

  getPanierMontant(){
    return element(By.css('.row-tot-amount')).getText();
  }

  getRowClass(): string {
    return "cart-row";
  }
}
