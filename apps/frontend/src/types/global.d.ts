import { FC as RFC, PropsWithChildren, ReactElement } from 'react';

type Element = ReactElement<any, any> | null;

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  type FC<P = {}> = RFC<P>;
  type FCC<P = unknown> = FC<PropsWithChildren<P>>;
  type SC<P = {}> = (props: P, context?: any) => Element | Promise<Element>;
  type SCC<P = unknown> = SC<PropsWithChildren<P>>;
}
