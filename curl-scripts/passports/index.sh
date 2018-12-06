#!/bin/bash

curl --include --request GET 'http://localhost:4741/passports' \
--header "Authorization: Token token=${TOKEN}"
