## Directory Layout

    public/app/         --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        controllers.js  --> application controllers
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        widgets.js      --> custom angular widgets
      lib/              --> angular and 3rd party javascript libraries
        angular/
          angular.js            --> the latest angular js
          angular.min.js        --> the latest minified angular js
          angular-ie-compat.js  --> angular patch for IE 6&7 compatibility
          version.txt           --> version number
      partials/         --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    conf/ng/jsTestDriver.conf    --> config file for JsTestDriver

    logs/               --> JSTD and other logs go here (git-ignored)

    scripts/            --> handy shell/js/ruby scripts
      test-server.bat   --> starts JSTD server (windows)
      test-server.sh    --> starts JSTD server (*nix)
      test.bat          --> runs all unit tests (windows)
      test.sh           --> runs all unit tests (*nix)
      watchr.rb         --> config script for continuous testing with watchr
      web-server.js     --> simple development webserver based on node.js

    test/ng/            --> test source files and libraries
      e2e/              -->
        runner.html     --> end-to-end test runner (open in your browser to run)
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
        jasmine/                --> Pivotal's Jasmine - an elegant BDD-style testing framework
        jasmine-jstd-adapter/   --> bridge between JSTD and Jasmine
        jstestdriver/           --> JSTD - JavaScript test runner
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers

