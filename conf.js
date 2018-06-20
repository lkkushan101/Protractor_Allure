exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs:['c:/edge/test1.js'],
  
  capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        }
  },

onPrepare: function() {
       var AllureReporter = require('C:/Users/kam/node_modules/jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'c:/temp/allure-results/'
        }));
	}
   }