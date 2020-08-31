import url2cmid from '../src';

describe('url2cmid', function() {
  describe('export', function() {
    it('should be a function', function() {
      expect(url2cmid).toBeInstanceOf(Function);
    });
  });

  describe('result', function() {
    it('should be a CMID', function() {
      expect(
        url2cmid(
          'http://nucwed.aus.aunty.abc.net.au/news/2015-02-17/before-after-test/6088946'
        )
      ).toBe('6088946');
      expect(
        url2cmid(
          'http://nucwed.aus.aunty.abc.net.au/news/2015-02-17/before-after-test/6088947?'
        )
      ).toBe('6088947');
      expect(
        url2cmid(
          'http://nucwed.aus.aunty.abc.net.au/news/2015-02-17/before-after-test/6088948?querystring=bam'
        )
      ).toBe('6088948');
      expect(
        url2cmid(
          'http://nucwed.aus.aunty.abc.net.au/news/2015-02-17/before-after-test/60889475#'
        )
      ).toBe('60889475');
      expect(
        url2cmid(
          'http://nucwed.aus.aunty.abc.net.au/news/2015-02-17/before-after-test/60889485#fragment'
        )
      ).toBe('60889485');
      expect(
        url2cmid(
          'http://www.abc.net.au/news/2015-02-17/before-after-test/6088949'
        )
      ).toBe('6088949');
      expect(url2cmid('http://www.abc.net.au/news/6088950')).toBe('6088950');
      expect(
        url2cmid(
          'http://www.abc.net.au/news/2015-02-17/before-390843999/6088951'
        )
      ).toBe('6088951');
      expect(
        url2cmid('http://www.abc.net.au/news/2015-02-17/2838895-test/6088952')
      ).toBe('6088952');
      expect(
        url2cmid(
          'http://www.abc.net.au/news/linkableblob/6128592/data/picasso-before-data.jpg'
        )
      ).toBe('6128592');
      expect(
        url2cmid('http://www.abc.net.au/news/image/5706180-16x9-220x124.jpg')
      ).toBe('5706180');
      expect(
        url2cmid(
          'http://www.abc.net.au/cm/lb/8734198/data/sean-spicer-data.jpg'
        )
      ).toBe('8734198');
    });

    it('should be false', function() {
      expect(url2cmid('')).toBe(false);
      expect(url2cmid('http://www.abc.net.au/news/')).toBe(false);
      expect(url2cmid('http://www.abc.net.au/news/qld/')).toBe(false);
      expect(url2cmid('http://www.example.com')).toBe(false);
    });
  });

  describe('should throw a type error', () => {
    expect(() => url2cmid(undefined)).toThrowError();
  });
});
