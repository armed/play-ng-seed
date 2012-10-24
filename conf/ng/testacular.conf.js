basePath = '../..';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'public/app/lib/angular/angular.js',
  'public/app/lib/angular/angular-*.js',
  'test/ng/lib/angular/angular-mocks.js',
  'public/app/js/**/*.js',
  'test/ng/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
