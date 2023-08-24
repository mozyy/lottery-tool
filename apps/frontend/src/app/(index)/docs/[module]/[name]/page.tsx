import 'swagger-ui-react/swagger-ui.css';
import { SwaggerUI } from './SwaggerUI';

const getOpenapi = (module:string, name: string) => import(`openapi/openapi/${module}/${name}.swagger.json`);

interface AppProps {
  params: { module:string, name: string }
}

export default async function App({ params: { module, name } }: AppProps) {
  const spec = await getOpenapi(module, name);
  return <SwaggerUI spec={spec} />;
}
