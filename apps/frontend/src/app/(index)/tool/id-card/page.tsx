import IdCardComponent from './IdCard';
import { Box } from '@/mui/material';

export const metadata = {
  title: '身份证号码生成器',
  keywords: '身份证,身份证测试,身份证生成,身份证信息,测试身份证,身份证工具,身份证号码在线生成器',
};

export default function IdCard() {
  return (
    <Box>
      《中华人民共和国居民身份证法》第六条 居民身份证式样由国务院公安部门制定。居民身份证由公安机关统一制作、发放。
      第十七条 有下列行为之一的，由公安机关处二百元以上一千元以下罚款，或者处十日以下拘留，有违法所得的，没收违法所得：
      （一）冒用他人居民身份证或者使用骗领的居民身份证的；
      （二）购买、出售、使用伪造、变造的居民身份证的。
      <IdCardComponent />

    </Box>
  );
}
