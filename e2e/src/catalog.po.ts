import {By, element} from "protractor";
import {ListPage} from "./list.po";

export class CatalogPage extends ListPage{

  getAuthorOnRowIndex(rowIndex: number) {
    return this.getOnRow(rowIndex, '.row-author').getText();
  }

  buyBookOnRow(rowIndex: number){
    return this.getOnRow(rowIndex, 'app-buy-book').click();
    //app-buy-book
  }

  getRowClass(): string {
    return "app-catalog-list-item";
  }
}
