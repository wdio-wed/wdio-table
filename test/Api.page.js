"use strict";
let Params = require('./Params.page.js');

class Api {
  constructor(path) {
    this.path = path;
  }

  get params () { return new Params('#Parameters + table') };

  open() {
    browser.url('/api/' + this.path + '.html');
  }
}

module.exports = Api;