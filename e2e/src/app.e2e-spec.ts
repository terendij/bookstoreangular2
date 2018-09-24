import { AppPage } from './app.po';
import {CatalogPage} from "./catalog.po";
import {browser} from "protractor";
import {PanierPage} from "./panier.po";

describe('workspace-project App', () => {
  const page: AppPage = new AppPage();
  const catalogPage = new CatalogPage();
  const cartPage = new PanierPage();

  beforeEach(() => {
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getParagraphText()/* ici c'est une promise pas possible de récupérer un string*/).toEqual('Bookstore');
  });

  it('should display a catalog of more than 10 books', () => {
    expect(catalogPage.getRowsCount()/* ici c'est une promise pas possible de récupérer le total*/).toBeGreaterThanOrEqual(10);
    expect(catalogPage.getAuthorOnRowIndex(0)).toContain('Alain Damasio');
  });

  it('should display buy books', () => {
    catalogPage.buyBookOnRow(0);
    page.clickOnMenu('Panier');
    expect(cartPage.getRowsCount()).toEqual(1);
    expect(cartPage.getTitleOnRowIndex(0)).toContain('La Horde du Contrevent');
    expect(cartPage.getQuantityOnRowIndex(0)).toEqual(1);
    page.clickOnMenu('Catalogue');
    catalogPage.buyBookOnRow(0);
    catalogPage.buyBookOnRow(1);
    page.clickOnMenu('Panier');
    expect(cartPage.getRowsCount()).toEqual(2);
    expect(cartPage.getTitleOnRowIndex(0)).toContain('La Horde du Contrevent');
    expect(cartPage.getQuantityOnRowIndex(0)).toEqual(2);
    expect(cartPage.getTitleOnRowIndex(1)).toContain('Black-out');
    expect(cartPage.getQuantityOnRowIndex(1)).toEqual(1);
    expect(cartPage.getPanierMontant()).toContain('31,70 €');
    cartPage.setQuantityOnRowIndex(0, 3);
    expect(cartPage.getPanierMontant()).toContain('42,60 €');
  });

});
