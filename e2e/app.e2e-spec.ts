import { TpvCoffeeProjectTeamAppPage } from './app.po';

describe('tpv-coffee-project-team-app App', function() {
  let page: TpvCoffeeProjectTeamAppPage;

  beforeEach(() => {
    page = new TpvCoffeeProjectTeamAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
