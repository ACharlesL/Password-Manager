#!/bin/bash

curl --include --request DELETE "http://localhost:4741/passports/${ID}" \
--header "Authorization: Token token=${TOKEN}"
