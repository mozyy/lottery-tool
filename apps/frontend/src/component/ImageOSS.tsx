import { envBrowser } from '@/env.browser';
import { envServer } from '@/env.server';
import uck from '../assets/images/uck.png';
import { Box, Button, ButtonBase } from '@/mui/material';

const prefix = `https://${envBrowser.ossBucket}.oss-${envBrowser.ossLocaltion}.aliyuncs.com/`;

interface StandardProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  alt: string
}
interface ImageProps extends StandardProps {
  src: string
}
interface OSSProps extends StandardProps {
  name?: string
  /** 图片处理:
   * resize,w_400,h_100/quality,q_75
   * https://help.aliyun.com/document_detail/144582.html?spm=a2c4g.183902.0.0.502b1e4fh6v6lf
   */
  process?: string
  format?: 'webp' | 'jpg' | 'png' | 'gif' | string
}
export type ImageOSSProps = OSSProps | ImageProps;

export default function ImageOSS(props: ImageOSSProps) {
  let srcValue:string;
  let imgProps:StandardProps;
  if ('name' in props) {
    const {
      name, process = 'quality,q_75', format = 'webp', ...otherProps
    } = props;
    srcValue = name ? `${prefix}${name}?x-oss-process=image/${process}/format,${format}` : uck.src;
    imgProps = otherProps;
  } else if ('src' in props) {
    const { src, ...otherProps } = props;
    srcValue = src;
    imgProps = otherProps;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img
      src={srcValue!}
      loading="lazy"
      {...imgProps!}
    />
  );
}
