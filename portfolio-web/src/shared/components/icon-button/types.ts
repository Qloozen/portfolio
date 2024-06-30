import { ButtonProps } from '@components/button/types';

export type IconButtonProps = {
  children?: React.ReactNode;
  leadingIcon?: string;
  trailingIcon?: string;
  iconColorType?: 'fill' | 'stroke';
} & Omit<ButtonProps, 'children'>;
