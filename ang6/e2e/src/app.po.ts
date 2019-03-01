import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getLoginButton() {
    return element(by.css('class="mat-button-wrapper"')).getText();
  }
}
