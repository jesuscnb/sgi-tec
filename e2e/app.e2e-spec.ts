import { SgiTecPage } from './app.po';

describe('sgi-tec App', () => {
  let page: SgiTecPage;

  beforeEach(() => {
    page = new SgiTecPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
