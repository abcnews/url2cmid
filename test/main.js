var expect = require('expect.js')
var url2cmid = require('../index');

describe('url2cmid', function(){

	describe('export', function(){
		it('should be a function', function(){
			expect(url2cmid).to.be.a('function');
		});
	}) 
		
	describe('result', function(){
		it('should be a CMID', function(){
			expect(url2cmid('http://nucwed.aus.aunty.abc.net.au/news/2015-02-17/before-after-test/6088946')).to.be('6088946');
			expect(url2cmid('http://www.abc.net.au/news/2015-02-17/before-after-test/6088946')).to.be('6088946');
			expect(url2cmid('http://www.abc.net.au/news/6088946')).to.be('6088946');
			expect(url2cmid('http://www.abc.net.au/news/2015-02-17/before-390843999/6088946')).to.be('6088946');
			expect(url2cmid('http://www.abc.net.au/news/2015-02-17/2838895-test/6088946')).to.be('6088946');
			expect(url2cmid('http://www.abc.net.au/news/linkableblob/6128592/data/picasso-before-data.jpg')).to.be('6128592');
			expect(url2cmid('http://www.abc.net.au/news/image/5706180-16x9-220x124.jpg')).to.be('5706180');
		});

		it('should be false', function(){
			expect(url2cmid('')).to.be(false);
			expect(url2cmid('http://www.abc.net.au/news/')).to.be(false);
			expect(url2cmid('http://www.abc.net.au/news/qld/')).to.be(false);
			expect(url2cmid('http://www.example.com')).to.be(false);
		});
	});
	
});