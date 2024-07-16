export type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rectangle' | 'circular';
  type?: 'button' | 'submit' | 'reset';
  variant?: 'filled' | 'outlined' | 'text' | 'circular-filled' | 'circular-outlined';
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;
