const {driver} = require('vl-ui-core').Test.Setup;
const VlRichDataPage = require('./pages/vl-rich-data.page');

describe('vl-rich-data', async () => {
  const vkRichDataPage = new VlRichDataPage(driver);

  before(() => {
    return vkRichDataPage.load();
  });

  it('', async () => {
  });
});
