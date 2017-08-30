url2cmid
========

```
npm install @abcnews/url2cmid
```

And then…

```
const url2cmid = require('url2cmid');
const cmid = url2cmid('http://www.abc.net.au/news/2017-06-09/quiz/8602590');
// returns 8602590
```

## Tests

There are unit tests which should pass before releasing any updates to this module.

`npm test`