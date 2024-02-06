import { ImgHTMLAttributes } from 'react';

interface ImageWrapperProps extends ImgHTMLAttributes<HTMLImageElement> {
  path: string | { src: string };
}

const ImageWrapper = ({ path, ...props }: ImageWrapperProps) => {
  return <img src={typeof path === 'string' ? path : path.src} {...props} />;
};

export default ImageWrapper;
