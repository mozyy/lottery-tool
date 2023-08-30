import { PropsWithChildren } from 'react';

export interface PageProps {
  full?: boolean
}
export default function Page({ full, children }:PropsWithChildren<PageProps>) {
  return (
    <div className={`h-full box-border ${full ? '' : 'p-2'}`}>
      {children}
    </div>
  );
}
