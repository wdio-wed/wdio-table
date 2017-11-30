"use strict";

class Api {
  constructor(selector) {
    this.table = $(selector);
  }

  getParams() {
    return this.table.elements('tbody tr')
  }

  getNames() {
    return this.table.elements('tbody tr td:first-child')
  }

  getNamesText() {
    let names = this.getNames().getText();

    return names.map(function (text) {
      // remove 'optional' if it's there
      return text.replace('optional', '').trim();
    });
  }

  getOptionalParamNames() {
    let names = this.getNames().getText();

    let filteredNames = names.filter(function (text) {
      return text.includes('optional');
    });

    return filteredNames.map(function (text) {
      // remove 'optional'
      return text.replace('optional', '').trim();
    });
  }

  getRow(index) {
    const rows = this.getParams();

    return rows.value[index];
  }

  getRowText(index) {
    const row = this.getRow(index);

    return row.elements('td').getText();
  }

  getColumn(index) {
    const column = this.table.elements(`tbody tr td:nth-child(${index})`);

    return column;
  }

  getColumnText(index) {
    const column = this.getColumn(index);

    return column.getText();
  }
}

module.exports = Api;