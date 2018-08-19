# lua-find [![NPM version](https://img.shields.io/npm/v/lua-find.svg?style=flat)](https://www.npmjs.com/package/lua-find) [![NPM monthly downloads](https://img.shields.io/npm/dm/lua-find.svg?style=flat)](https://npmjs.org/package/lua-find) [![NPM total downloads](https://img.shields.io/npm/dt/lua-find.svg?style=flat)](https://npmjs.org/package/lua-find)

Javascript implementation of Lua's [String.find](http://lua-users.org/wiki/StringLibraryTutorial) functionality to allow Javascript users get back the start of a needle, and it's end. Using both plain text matching and regular expression matching.

## Install

Install with [npm](https://www.npmjs.com/):

```bash
$ npm install lua-find --save
```

## Usage

```js
const find = require('lua-find')
```

See the [tests](./test.js) for more examples.

### Pattern Example

```js
let [start, end] = find('Hello World', /World/)
// [ 6, 11 ]
```

```js
// Pattern format also supports string based searches
let [start, end] = find('Hello World', 'World')
// [ 6, 11 ]
```

### Plain format example

Uses `string.indexOf` to improve performance when the pattern is a string.

```js
let [start, end] = find('Hello World', 'World', 0, true)
// [ 6, 11 ]
```

It also enforces patterns to be strings:

```js
let [start, end] = find('Hello /World/', /World/, 0, true) 
// [ 6, 13 ]
```

### Starting position examples

The third argument is the `startingAt` property.

```js
let [start, end] = find('Hello World, World Hello', 'Hello', 11, true)
// [19, 24]
```

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Running Tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can run tests with the following command:

```sh
$ npm test
```

### License

Copyright © 2018, [Nijiko Yonskai](https://github.com/nijikokun).
Released under the [MIT License](LICENSE).
