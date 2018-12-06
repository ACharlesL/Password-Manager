#!/bin/bash

curl --include --request GET "http://localhost:4741/passports/${ID}" \
--header "Authorization: Token token=${TOKEN}"
