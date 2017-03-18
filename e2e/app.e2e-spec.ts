import { FormsdemoPage } from './app.po';

describe('formsdemo App', function() {
  let page: FormsdemoPage;

  beforeEach(() => {
    page = new FormsdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
