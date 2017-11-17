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

  // getRow
  // getColumn

  // getParamDescription

}

module.exports = Api;