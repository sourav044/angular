import { AppPage } from './app.po';
import {browser,by, element} from 'protractor';
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login button', () => {
    page.navigateTo();
    expect(page.getLoginButton()).toEqual('Login');
  });
});






