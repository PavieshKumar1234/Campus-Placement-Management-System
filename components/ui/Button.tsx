'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  fullWidth = false,
  className = '',
  style,
  ...props
}: ButtonProps) {
  let btnClass = 'btn btn-primary';
  if (variant === 'secondary') btnClass = 'btn btn-secondary';
  if (variant === 'success') btnClass = 'btn btn-success';
  if (variant === 'danger') btnClass = 'btn btn-danger';
  if (variant === 'ghost') btnClass = 'btn-icon';

  const sizeStyle = size === 'sm' ? { padding: '6px 12px', fontSize: '0.8rem' } : size === 'lg' ? { padding: '12px 24px', fontSize: '1rem' } : {};

  return (
    <button
      className={`${btnClass} ${className}`}
      style={{
        width: fullWidth ? '100%' : 'auto',
        ...sizeStyle,
        ...style
      }}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
