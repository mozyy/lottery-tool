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
      'p-[24px 30px] border-t border-gray-300 bg-white w-full box-border flex justify-between',
      fixed && 'fixed bottom-0',
      className,
    )}
    >
      {children}
    </div>
  );
}
