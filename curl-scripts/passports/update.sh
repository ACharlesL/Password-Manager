#!/bin/bash

curl --include --request PATCH "http://localhost:4741/passports/${ID}" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
  --data '{
    "passport": {
      "title": "'"${TITLE}"'",
      "email": "'"${EMAIL}"'",
      "cred": "'"${CRED}"'",
      "url": "'"${URL}"'",
      "contact": "'"${CONTACT}"'",
      "note": "'"${NOTE}"'"
    }
  }'
