import { PropsWithChildren } from 'react';

export interface ZPageProps {
  full?: boolean
}
export default function ZPage({ full, children }:PropsWithChildren<ZPageProps>) {
  return (
    <div className={`bg-gray-100 h-full box-border ${full ? '' : 'p-2'}`}>
      {children}
    </div>
  );
}
