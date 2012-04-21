#!/bin/bash

BASE_DIR=`dirname $0`

java -jar "$BASE_DIR/../test/ng/lib/jstestdriver/JsTestDriver.jar" \
     --config "$BASE_DIR/../conf/ng/jsTestDriver-scenario.conf" \
     --basePath "$BASE_DIR/../public" \
     --tests all --reset
