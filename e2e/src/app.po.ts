import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  getParagraphText() {
    return element(by.className('navbar-brand')).getText();
  }
}
