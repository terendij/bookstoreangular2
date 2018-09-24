import {By, element} from "protractor";

export abstract class ListPage {

  abstract getRowClass(): string;

  getRows(){
    return element.all(By.className(this.getRowClass()));
    //= return element.all(By.css('.app-catalog-list-item'));
  }

  getRowsCount(){
    return this.getRows().count(); // ca renvoie aussi une promesse
  }

  getOnRow(rowIndex: number, cssSelector: string) {
    return this.getRows().get(rowIndex).element(By.css(cssSelector));
  }
}
