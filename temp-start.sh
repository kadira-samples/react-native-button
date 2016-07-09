#!/bin/bash

./node_modules/.bin/storybook start -p 9001 -h 0.0.0.0 -c "{\"channel\":{\"type\":\"firebase\",\"options\":{\"baseUrl\":\"https://kadira-storybooks.firebaseio.com\",\"readRef\":\"/43f7f11a-e0fe-47f2-ba09-2c152785b342/device\",\"writeRef\":\"/43f7f11a-e0fe-47f2-ba09-2c152785b342/browser\"}}, \"preview\": {\"appetize\": {\"android\": \"phd1gpp2a2d260a4r3pxvujukw\"}}}"
