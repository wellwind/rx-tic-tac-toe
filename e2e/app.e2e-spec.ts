import { RxTicTacToePage } from './app.po';

describe('rx-tic-tac-toe App', () => {
  let page: RxTicTacToePage;

  beforeEach(() => {
    page = new RxTicTacToePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
