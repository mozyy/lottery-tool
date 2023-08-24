#!/bin/bash

docs=(
  health/department
  health/hospital
  health/nurse
  health/patient
  lottery/lottery
  lottery/record
  oauth/oauth
  wx/wx
  wx/user
)
for doc in "${docs[@]}"; do
  pnpm exec openapi-generator-cli generate -g typescript-axios \
  -i ./src/openapi/docs/$doc.swagger.json \
  -o ./src/openapi/$doc
done

# workspace=$(pwd)/$(dirname "$0")/../*

# for f in $workspace/src/openapi/docs/lottery/; do
#   openapi-generator-cli generate -g typescript-axios \
#   -i $f \
#   -o $workspace/src/openapi/lottery/record
# done;