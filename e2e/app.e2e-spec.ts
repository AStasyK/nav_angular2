import { NaviFrontPage } from './app.po';

describe('navi-front App', () => {
  let page: NaviFrontPage;

  beforeEach(() => {
    page = new NaviFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
