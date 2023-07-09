#!/bin/bash

docs=(lottery oauth record user wx)
for doc in "${docs[@]}"; do
  pnpm exec openapi-generator-cli generate -g typescript-axios \
  -i ./src/openapi/docs/lottery/$doc.swagger.json \
  -o ./src/openapi/lottery/$doc
done

# workspace=$(pwd)/$(dirname "$0")/../*

# for f in $workspace/src/openapi/docs/lottery/; do
#   openapi-generator-cli generate -g typescript-axios \
#   -i $f \
#   -o $workspace/src/openapi/lottery/record
# done;