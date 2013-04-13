## Directory Layout

    app/views           --> layout files

    public/app/         --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> main application module
        controllers.js  --> application controllers
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        directives.js   --> custom angular directives
      lib/              --> angular and 3rd party javascript libraries
        angular/
          angular.js            --> the latest angular js
          angular.min.js        --> the latest minified angular js
          angular-*.js          --> angular built-in modules
          version.txt           --> version number
      partials/         --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    conf/ng/karma.conf.js        --> config file for running unit tests with Karma
    conf/ng/karma-e2e.conf.js    --> config file for running e2e tests with Karma

    logs/               --> logs

    scripts/            --> handy shell scripts
      e2e-test.sh       --> runs end-to-end tests with Karma (*nix)
      e2e-test.bat      --> runs end-to-end tests with Karma (windows)
      test.bat          --> autotests unit tests with Karma (windows)
      test.sh           --> autotests unit tests with Karma (*nix)

    test/ng/            --> test source files and libraries
      e2e/              -->
        runner.html     --> end-to-end test runner (open in your browser to run)
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivesSpec.js       --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services

