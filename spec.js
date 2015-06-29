var BASE_URL = 'http://localhost:3000';

describe('Github Radar App', function() {
  it('should have a title', function() {
    browser.get(BASE_URL);
    expect(browser.getTitle()).toEqual('Issue Timeline');
  });
});