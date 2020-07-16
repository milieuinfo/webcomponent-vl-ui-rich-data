const {Page, Config} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;
const {VlInputField} = require('vl-ui-input-field').Test;
const {VlSearchResults} = require('vl-ui-search-results').Test;
const VlRichData = require('../components/vl-rich-data');

class VlRichDataPage extends Page {
  async getRichData() {
    return new VlRichData(this.driver, '#rich-data');
  }

  async getSearchFilterInputFieldByName(searchFilter, name) {
    return new VlInputField(this.driver, await searchFilter.findElement(By.css(`[name="${name}"]`)));
  }

  async resetSearchFilter(searchFilter) {
    const button = await searchFilter.findElement(By.css('button[type="reset"]'));
    await button.click();
  }

  async getSearchResults(richData) {
    const slotElements = await richData.getContentSlotElements();
    return new VlSearchResults(this.driver, slotElements[0]);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-rich-data.html');
  }
}

module.exports = VlRichDataPage;
