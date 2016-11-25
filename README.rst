.. vim: ft=rst sts=2 sw=2 tw=77

.. :Author: Roman Neuhauser
.. :Contact: neuhauser+gistish@sigpipe.cz
.. :Copyright: This document is in the public domain.

.. this file is marked up using reStructuredText
.. lines beginning with ".." are reST directives
.. "foo_" or "`foo bar`_" is a link, defined at ".. _foo" or ".. _foo bar"
.. "::" introduces a literal block (usually some form of code)
.. "`foo`" is some kind of identifier
.. suspicious backslashes in the text ("`std::string`\s") are required for
.. reST to recognize the preceding character as syntax


Introduction
============

`gistish` is a quick hack of a tool for gist_ creation.
It's written in ES6_ (ECMAScript 2015) for `Node.js`_.
You'll need a Github account (obviously), and a `personal
access token`_.

`gistish` requires two configuration files:

* ``~/.config/gistish/USER``
  Contents of this file will be used as the github username.
* ``~/.config/gistish/PASS``
  Contents of this file will be used as the token.

So far there's no Makefile or anything like that, just copy the
implementation into a directory somewhere in your `$PATH`, create
the necessary configuration files, and you're set.

.. _gist: https://gist.github.com/
.. _ES6: https://nodejs.org/en/docs/es6/
.. _Node.js: https://nodejs.org/
.. _personal access token: https://github.com/settings/tokens


Usage
=====

::

  $ gistish
  usage: gistish FILE...


License
=======

Published under the `MIT license`_, see `LICENSE file`_.

.. _MIT license: https://opensource.org/licenses/MIT
.. _LICENSE file: LICENSE
