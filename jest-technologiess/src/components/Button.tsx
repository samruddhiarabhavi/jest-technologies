import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'light';
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

const styles = {
  solid: 'bg-forest text-paper hover:bg-deep',
  outline: 'border border-ink/30 text-ink hover:border-ink hover:bg-ink/5',
  light: 'bg-paper text-forest hover:bg-sand',
};

export default function Button({ children, variant = 'solid', to, onClick, type = 'button', className = '' }: Props) {
  const cls = `inline-flex min-h-[46px] items-center justify-center rounded-md px-5 text-[15px] font-medium transition-colors duration-200 ${styles[variant]} ${className}`;
  return to ? (
    <Link to={to} className={cls}>
      {children}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
