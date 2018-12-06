#!/bin/bash

curl "http://localhost:4741/passports" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
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

  echo
