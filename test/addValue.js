const expect = require('chai').expect;
let Api = require('./Api.page.js');

describe('The addValue API page', function () {
  let page;

  beforeEach(function () {
    page = new Api('action/addValue')
    page.open();
  })

  it('should load the page', function () {
    expect(browser.getUrl()).to.contain('addValue');
  })

  it('should have a params table', function () {
    expect(page.params.table.isExisting()).to.be.true;
  })

  it('should have three parameters listed', function () {
    expect(page.params.getParams().value).to.have.length(2);
  })

  it('should have "selector" and "values" parameters', function () {
    expect(page.params.getNamesText()).to.deep.equal(['selector', 'values'])
  })

  it('should have no optional parameters', function () {
    expect(page.params.getOptionalParamNames()).to.have.length(0);
  })

  it('should list "selector" as the first parameter', function () {
    const row = page.params.getRowText(0);

    expect(row).to.deep.equal(['selector', 'String', 'Input element']);
  })

  it('should list parameter types', function () {
    const typesColumn = page.params.getColumnText(2);

    expect(typesColumn).to.deep.equal(['String', 'String/Number']);
  })
})