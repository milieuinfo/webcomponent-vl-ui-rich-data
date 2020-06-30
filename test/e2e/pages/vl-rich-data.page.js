const VlRichData = require('../components/vl-rich-data');
const {Page, Config} = require('vl-ui-core').Test;

class VlRichDataPage extends Page {
  async _getRichData(selector) {
    return new VlRichData(this.driver, selector);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-rich-data.html');
  }
}

module.exports = VlRichDataPage;
