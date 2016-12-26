import { SmartbookPage } from './app.po';

describe('smartbook App', function() {
  let page: SmartbookPage;

  beforeEach(() => {
    page = new SmartbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sb works!');
  });
});
