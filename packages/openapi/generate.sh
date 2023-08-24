#!/bin/bash

types=(
  fetch
  axios
)

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
for type in "${types[@]}"; do
  for doc in "${docs[@]}"; do
    pnpm exec openapi-generator-cli generate -g typescript-$type \
    -i ./openapi/$doc.swagger.json \
    -o ./$type/$doc
  done
done

# workspace=$(pwd)/$(dirname "$0")/../*

# for f in $workspace/src/openapi/docs/lottery/; do
#   openapi-generator-cli generate -g typescript-axios \
#   -i $f \
#   -o $workspace/src/openapi/lottery/record
# done;