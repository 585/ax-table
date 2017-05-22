import { AxTablePage } from './app.po';

describe('table App', () => {
  let page: AxTablePage;

  beforeEach(() => {
    page = new AxTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
