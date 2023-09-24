import createErrorBoundary from '@zyy/weapp/src/components/common/createErrorBoundary';
import Turntable from '../../components/Turntable';

function Test() {
  const items = [
    {name: '奖品一', value: 1},
    {name: '奖品二', value: 2},
    {name: '奖品三', value: 3},
  ]
  return (
    <div>
      <Turntable items={items}/>
    </div>
  );
}

export default createErrorBoundary(Test);
