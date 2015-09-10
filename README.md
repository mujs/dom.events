dom.on.extras
=============

A collection of [dom plugins](https://github.com/mujs/dom) for
event handling

Usage
-----

```js
var dom   = require('dom').use({
  onInput : require('dom.on.input')
});

var logName = function (name) {
  console.log('name:', name);
};

dom('#hero .name').onInput(logName);
```
