# url2cmid

Extracts the ID from an ABC News URL.

## Usage

```
npm install @abcnews/url2cmid
```

And then…

```
import url2cmid from '@abcnews/url2cmid';
const cmid = url2cmid('http://www.abc.net.au/news/2017-06-09/quiz/8602590');
// returns '8602590'
```

## Development

This module is written in [typescript](https://www.typescriptlang.org/), uses [tsdx](https://tsdx.io/) for build/dev and [np](https://github.com/sindresorhus/np#readme) for deployment.
