import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export interface BottomBarProps {
  /** 是否fixed 在底部 */
  fixed?: boolean
  className?: string
}

export default function BottomBar({
  fixed, className, children,
}: PropsWithChildren<BottomBarProps>) {
  return (
    <div className={classNames(
      'px-4 py-3 border-t border-gray-300 bg-white w-full box-border flex justify-between',
      fixed && 'fixed bottom-0',
      className,
    )}
    >
      {children}
    </div>
  );
}
