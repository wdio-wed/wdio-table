const expect = require('chai').expect;
let Api = require('./Api.page.js');

describe('The waitForExist API page', function () {
  let page;

  beforeEach(function () {
    page = new Api('utility/waitForExist')
    page.open();
  })

  it('should load the page', function () {
    expect(browser.getUrl()).to.contain('waitForExist');
  })

  it('should have a params table', function () {
    expect(page.params.table.isExisting()).to.be.true;
  })

  it('should have three parameters listed', function () {
    expect(page.params.getParams().value).to.have.length(3);
  })

  it('should have "selector", "ms", and "reverse" parameters', function () {
    expect(page.params.getNamesText()).to.deep.equal(['selector', 'ms', 'reverse'])
  })
})