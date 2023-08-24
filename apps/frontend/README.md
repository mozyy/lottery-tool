# empty-frontend

openapi-generator-cli generate -g typescript-fetch \
-i ../empty-frontend/src/openapi/docs/blog/blog.swagger.json \
-o ../empty-frontend/src/openapi/blog/blog

## Troubleshooting

### prettier-eslint-cli:

Failed to load plugin 'react-hooks' declared in 'CLIOptions'  
replace `node_modules/@rushstack/eslint-patch/lib/modern-module-resolution.js`251 line: `return originalResolve.call(this, moduleName, ctx.filePath);`to `return originalResolve.call(this, moduleName, ctx.filePath || relativeToPath);`

### docker envoy
docker run --name envoy -p 51051:51051 -it --rm \
  -v "vsc-remote-containers-empty:/workspaces:ro" \
  envoyproxy/envoy:v1.25-latest -c /workspaces/empty-backend/envoy.yaml


grpc_tools_node_protoc -I../empty-backend/proto/proto -I../empty-backend/proto/third_party --js_out=import_style=commonjs,binary:src/grpc/ \
--grpc_out=grpc_js:src/grpc/ ../empty-backend/proto/proto/blog/blog.proto 

### deploy
`npm run build` `tar zcvf next.tar.gz .next/standalone/ .next/static/` `tar zxvf next.tar.gz`