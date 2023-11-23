import { View } from '@tarojs/components';
import React from 'react';

interface BottomTipProps {
  content?: React.ReactNode
}

export default function BottomTip({ content }:BottomTipProps) {
  return (
    <View className="flex h-32 py-20 items-center flex-shrink-0">
      <View className="flex-auto h-px bg-gray-300" />
      <View className="mx-8 text-2xl text-gray-700 flex-shrink-0">{content || '已经到底啦'}</View>
      <View className="flex-auto h-px bg-gray-300" />
    </View>
  );
}
