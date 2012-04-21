#!/bin/bash

BASE_DIR=`dirname $0`

java -jar "$BASE_DIR/../test/ng/lib/jstestdriver/JsTestDriver.jar" \
     --config "$BASE_DIR/../conf/ng/jsTestDriver.conf" \
     --basePath "$BASE_DIR/.." \
     --tests all
