"use client"

import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, icon, href, className, ...props }, ref) => {
    const content = (
      <>
        {icon && (
          <div className="svg-wrapper">
            {icon}
          </div>
        )}
        <span>{children}</span>
      </>
    );

    if (href) {
      return (
        <a href={href} className={cn("animated-button", className)} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={cn("animated-button", className)} {...props}>
        {content}
      </button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export default AnimatedButton;
