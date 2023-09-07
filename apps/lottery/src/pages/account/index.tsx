import { Right } from '@nutui/icons-react-taro';
import {
  Cell, CellGroup,
} from '@nutui/nutui-react-taro';
import { BaseEventOrig, Button } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { userServiceApi } from '../../api/wx';
import Avatar from '../../components/Avatar';
import createErrorBoundary from '../../components/common/createErrorBoundary';
import { useSWR } from '../../hooks/swr';
import { useSWRMutation } from '../../hooks/swrMutation';
import { useUploadOss } from '../../hooks/uploadOss';
import { useUserId } from '../../hooks/userId';

function Account() {
  const userId = useUserId();
  const { data, mutate } = useSWR([userServiceApi.userServiceGetByUserId, userId]);
  const { trigger } = useSWRMutation([userServiceApi.userServiceUpdate]);
  const uploadOss = useUploadOss();
  const toPage = (url: string) => () => {
    navigateTo({ url });
  };
  const onChooseAvatar = async (e: BaseEventOrig) => {
    const url = e.detail.avatarUrl;
    const resp = await uploadOss(url);
    console.log(1111);
    await trigger([data?.wxUser?.id!, { wxUser: { ...data?.wxUser, avatar: resp.id } }]);
    console.log(222);
    mutate();
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
                <Avatar ossId={data?.wxUser?.avatar} size='large' />
                <Right />
              </div>
          )}
          />
        </Button>
        <Cell
          title='名字'
          onClick={toPage('/pages/accountName/index')}
          extra={<Right />}
        />
      </CellGroup>
    </div>
  );
}

export default createErrorBoundary(Account);
