import { getOpenapi } from '@zyy/openapi/src/docs';
import { SwaggerUI } from './SwaggerUI';

interface AppProps {
  params: { module:string, name: string }
}

export default async function App({ params: { module, name } }: AppProps) {
  const spec = await getOpenapi(module, name);
  console.log(111, spec);
  return <SwaggerUI spec={spec} />;
}
