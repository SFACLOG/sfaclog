import { ImgHTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../utils';
import ImageWrapper from '../common/ImageWrapper';
import AvatarImg from '../../../public/images/avatar.svg';

export interface AvatarProps
  extends ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof ImgVariants> {
  src?: string;
  alt?: string;
  styles?: string;
  className?: string;
}

const ImgVariants = cva('rounded-full object-cover', {
  variants: {
    size: {
      large: 'w-[120px] h-[120px]',
      medium: 'w-[104px] h-[104px]',
      small: 'w-[40px] h-[40px]',
      tiny: 'w-[26px] h-[26px]',
    },
  },
});

export const Avatar = ({
  size,
  src,
  alt,
  className,
  styles,
  ...rest
}: AvatarProps) => {
  return (
    <ImageWrapper
      className={cn(ImgVariants({ size, className }), styles)}
      path={src || AvatarImg}
      alt={alt || 'avatar'}
      {...rest}
    />
  );
};
