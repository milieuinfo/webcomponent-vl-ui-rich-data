const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;
const {VlPager} = require('vl-ui-pager').Test;
const {VlSearchFilter} = require('vl-ui-search-filter').Test;
const {VlSelect} = require('vl-ui-select').Test;

class VlRichData extends VlElement {
  async getContentSlotElements() {
    return this._getSlotElements('content');
  }

  async getSearchFilter() {
    const searchFilter = await this.findElement(By.css('[is="vl-search-filter"]'));
    return new VlSearchFilter(this.driver, searchFilter);
  }

  async getSorter() {
    const assignedElements = await this._getSorterSlotElements();
    return new VlSelect(this.driver, assignedElements[0]);
  }

  async getPager() {
    const assignedElements = await this._getPagerSlotElements();
    return new VlPager(this.driver, assignedElements[0]);
  }

  async getNumberOfSearchResults() {
    const element = await this._getSearchResultsNumberElement();
    return element.getText();
  }

  async toggleSearchFilter() {
    const button = await this.shadowRoot.findElement(By.css('#toggle-filter-button'));
    return button.click();
  }

  async closeSearchFilter() {
    const button = await this.shadowRoot.findElement(By.css('#close-filter-button'));
    return button.click();
  }

  async openModalSearchFilter() {
    const button = await this.shadowRoot.findElement(By.css('#open-filter-button'));
    return button.click();
  }

  async _getSorterSlotElements() {
    return this._getSlotElements('sorter');
  }

  async _getPagerSlotElements() {
    return this._getSlotElements('pager');
  }

  async _getSlotElements(name) {
    const slot = await this.shadowRoot.findElement(By.css(`slot[name="${name}"]`));
    return this.getAssignedElements(slot);
  }

  async _getSearchResultsNumberElement() {
    return this.shadowRoot.findElement(By.css('#search-results-number'));
  }
}

module.exports = VlRichData;
