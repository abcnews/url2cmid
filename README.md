url2cmid
========

```
npm install git+ssh://git@stash.abc-dev.net.au:7999/news/util-url2cmid.git
```

And then…

```
const url2cmid = require('util-url2cmid');
const cmid = url2cmid('http://www.abc.net.au/news/2017-06-09/quiz/8602590');
// returns 8602590
```
