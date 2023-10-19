import Video from './video';
import { Box } from '@/mui/material';

export const metadata = {
  title: '文字转语音',
  description: '提供文字转语音、AI智能语音的生成及下载服务',
  keywords: '文字转语音,AI生成语音,tts,AI转语音下载,文本转语音,text-to-speech,文字转语音下载',
};
export default function Json() {
  return (
    <Box>
      <Video />
    </Box>
  );
}
