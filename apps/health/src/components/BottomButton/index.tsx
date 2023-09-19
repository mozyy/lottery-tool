import { Button, ButtonProps } from '@nutui/nutui-react-taro';
import BottomBar, { BottomBarProps } from '../BottomBar';

interface BottomButtonProps extends Omit<Partial<ButtonProps>, 'ref'>, BottomBarProps {

}

export default function BottomButton({ fixed, className, ...buttonProps }: BottomButtonProps) {
  return (
    <BottomBar fixed={fixed} className={className}>
      <Button className='flex-auto' {...buttonProps} />
    </BottomBar>
  );
}
