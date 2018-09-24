import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/'); // c'est obligatoire pour charger l'application
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText(); // ça renvoie une promise de string !!! pas le string directement
  }

  clickOnMenu(name: string){
    element(by.linkText(name)).click();
  }
}
