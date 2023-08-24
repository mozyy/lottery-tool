import { SwaggerUI } from './SwaggerUI';
import 'swagger-ui-react/swagger-ui.css';

const getOpenapi = (module:string, name: string) => import(`@/openapi/docs/${module}/${name}.swagger.json`);

interface AppProps {
  params: { module:string, name: string }
}

export default async function App({ params: { module, name } }: AppProps) {
  const spec = await getOpenapi(module, name);
  return <SwaggerUI spec={spec} />;
}
