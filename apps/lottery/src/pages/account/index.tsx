import { Right } from '@nutui/icons-react-taro';

import {
  Avatar, Cell, CellGroup,
} from '@nutui/nutui-react-taro';
import { BaseEventOrig, Button } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { userServiceApi } from '../../api/wx';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useSWR } from '../../hooks/swr';
import { useUserId } from '../../hooks/userId';

function Account() {
  const userId = useUserId();
  const { data } = useSWR([userServiceApi.userServiceGet, userId!]);

  const toPage = (url: string) => () => {
    navigateTo({ url });
  };
  const onChooseAvatar = async (e: BaseEventOrig) => {
    const url = e.detail.avatarUrl;
    console.log(e, url);
  };

  return (
    <div className='p-2'>
      <CellGroup>
        <Button className='after:content-none' openType='chooseAvatar' onChooseAvatar={onChooseAvatar}>
          <Cell
            title='头像'
            align='center'
            extra={(
              <div className='flex items-center'>
                {data?.wxUser?.avatar ? (
                  <Avatar src={data.wxUser.avatar} size='large' />
                ) : (
                  <Avatar
                    icon={(
                      <span className='material-icons-outlined'>
                        account_circle
                      </span>
                  )}
                    size='large'
                  />
                )}
                <Right />
              </div>
          )}
          />
        </Button>
        <Cell
          title='名字'
          onClick={toPage('/pages/record/index')}
          extra={<Right />}
        />
      </CellGroup>
    </div>
  );
}

export default createErrorBoundary(Account);
