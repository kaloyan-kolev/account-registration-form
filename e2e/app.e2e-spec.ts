import { Project12Page } from './app.po';

describe('project12 App', () => {
  let page: Project12Page;

  beforeEach(() => {
    page = new Project12Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
