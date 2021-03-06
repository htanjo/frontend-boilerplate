Frontend Boilerplate
====================

Deliverables by this Boilerplate
--------------------------------

You can get the following deliverables by using this boilerplate. They are managed with [Grunt](http://gruntjs.com/).
Currently, they all are almost blank pages.

#### Distribution page
<http://htanjo.github.com/frontend-boilerplate/dist/>

#### Developer's page
<http://htanjo.github.com/frontend-boilerplate/src/>

#### QUnit Test Results
<http://htanjo.github.com/frontend-boilerplate/test/>

#### YUIDoc Reference
<http://htanjo.github.com/frontend-boilerplate/docs/>

Repository
----------
You will get the development source code at my repository.

    git://github.com/htanjo/frontend-boilerplate.git

Directory Structure
-------------------
    frontend-boilerplate/
      ├── dist/         : Front-end files to deploy.
      ├── docs/         : Documentation of JavaScript application API.
      ├── src/          : Development source code.
      ├── test/         : QUnit tests.
      ├── .gitignore
      ├── grunt.js      : Grunt build settings.
      ├── package.json  : Package info.
      └── README.md

Requirements to Build
---------------------
If you want to build this application, you have to install the follwing tools.

* [Node.js](http://nodejs.org/) : Platform for development.
* [Grunt](http://gruntjs.com/) : Build management tool.
    * [grunt-contrib](https://github.com/gruntjs/grunt-contrib) : Collection of common grunt tasks.
    * [grunt-imagine](https://github.com/asciidisco/grunt-imagine) : Grunt tasks for optimizing & inlining images.
    * [grunt-html](https://github.com/jzaefferer/grunt-html) : Grunt task for html validation.
* [phantomjs](http://phantomjs.org/) : Headless WebKit with JavaScript API. Required by QUnit task.
* pngout ([Linux,Mac](http://www.jonof.id.au/kenutils) / [Win](http://advsys.net/ken/utils.htm)) : PNG optimization tool. Required by grunt-imagine.

### Build Issues in Windows
When build error occured in "pngmin" task in Windows, try to modify `helper.js` by yourself.

    node_modules/grant-imagine/tasks/helper.js

1. Replace with the [latest version](https://github.com/asciidisco/grunt-imagine/blob/master/tasks/helper.js).
2. Install "cheerio" module. `npm install cheerio` or `npm install -g cheerio`.
3. Modify `helper.js` line 4. before:`jQuery  = require('jQuery');` -> after:`jQuery  = require('cheerio');`

#### Refer to:
* <https://github.com/asciidisco/grunt-imagine/issues/3>
* <https://github.com/asciidisco/grunt-imagine/issues/6>