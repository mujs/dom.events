define('mu.dom.onInput', function (require) {
  'use strict';

  var on  = require('mu.dom.on'),
      val = require('mu.dom.val');

  var onInput = function (node, listener) {
    on(node, 'input', function (event) {
      event.preventDefault();
      listener(val(this));
    });
  };

  return onInput;
});

define('mu.dom.onClick', function (require) {
  'use strict';

  var on  = require('mu.dom.on');

  var onClick = function (node, listener) {
    on(node, 'click', function (event) {
      event.preventDefault();
      listener();
    });
  };

  return onClick;
});

define('mu.dom.onSubmit', function (require) {
  'use strict';

  var on  = require('mu.dom.on');

  var onSubmit = function (node, listener) {
    on(node, 'submit', function (event) {
      event.preventDefault();
      listener();
    });
  };

  return onSubmit;
});
