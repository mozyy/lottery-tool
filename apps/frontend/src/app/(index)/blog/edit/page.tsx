import dynamic from 'next/dynamic';

const Create = dynamic(() => import('./Create'), { ssr: false });

export default async function Detail() {
  return (
    <Create />
  );
}
