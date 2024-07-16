import { ButtonProps } from '@components/button/types';

export type NavigationButtonProps = {
  className?: string;
  href: string;
  target?: string;
  children?: React.ReactNode;
  leadingIcon?: string;
  trailingIcon?: string;
  iconColorType?: 'fill' | 'stroke';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rectangle' | 'circular';
  type?: 'button' | 'submit' | 'reset';
  variant?: 'filled' | 'outlined' | 'text' | 'circular-filled' | 'circular-outlined';
};
