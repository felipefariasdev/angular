import { Angular4Bootstrap4Page } from './app.po';

describe('angular4-bootstrap4 App', () => {
  let page: Angular4Bootstrap4Page;

  beforeEach(() => {
    page = new Angular4Bootstrap4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
