import dynamic from 'next/dynamic';

const Update = dynamic(() => import('./Update'), { ssr: false });

export default function Detail({ params: { id } }:{ params: { id:string } }) {
  return (
    <Update id={id} />
  );
}
