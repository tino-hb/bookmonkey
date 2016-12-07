import { BookmonkeyPage } from './app.po';

describe('bookmonkey App', function() {
  let page: BookmonkeyPage;

  beforeEach(() => {
    page = new BookmonkeyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bm works!');
  });
});
