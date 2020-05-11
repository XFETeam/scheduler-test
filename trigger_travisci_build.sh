#!/bin/sh

body="{ \"request\": { \"branch\":\"master\", \"message\": \"Build triggered by companion\" }}"

curl -s -X POST \
     -H "Content-Type: application/json" \
     -H "Accept: application/json" \
     -H "Travis-API-Version: 3" \
     -H "Authorization: token 8rRota2mc_aPN9FVO49Mnw" \
     -d "$body" \
     https://api.travis-ci.org/repo/XFETeam%2Fscheduler-test/requests
