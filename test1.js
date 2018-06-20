describe('Go to google', function (){
 it ('should go to google', function(){
     browser.ignoreSynchronization =true;
	 browser.get('http://www.google.lk');
	 element(by.name('q')).sendKeys('selenium');
	 element(by.name('q')).submit();
	 element(by.linkText('Selenium IDE')).click();
 });
 });