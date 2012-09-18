Frontend Boilerplate
====================

Project Page
------------
<https://github.com/htanjo/frontend-boilerplate>

Repository
----------
You will get the development source code at our repository.

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

Requirements to Develop
-----------------------
* [Node.js](http://nodejs.org/) : Platform for development.
* [Grunt](http://gruntjs.com/) : Build management tool.
    * [grunt-contrib](https://github.com/gruntjs/grunt-contrib) : Collection of common grunt tasks.
    * [grunt-imagine](https://github.com/asciidisco/grunt-imagine) : Grunt tasks for optimizing & inlining images.
    * [grunt-html](https://github.com/jzaefferer/grunt-html) : Grunt task for html validation.
* [phantomjs](http://phantomjs.org/) : Headless WebKit with JavaScript API. Required by QUnit task.
* [pngout](http://www.jonof.id.au/kenutils) : PNG optimization tool. Required by grunt-imagine.