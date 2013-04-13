basePath = '../..';

urlRoot = '/__testacular/';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/ng/e2e/**/*.js'
];

autoWatch = false;

browsers = ['Chrome'];

singleRun = true;

proxies = {
  '/': 'http://localhost:9000/'
};

junitReporter = {
  outputFile: 'tmp/e2e.xml',
  suite: 'e2e'
};
