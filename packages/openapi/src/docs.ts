export const getOpenapi = (module:string, name: string) => import(`../openapi/${module}/${name}.swagger.json`);
