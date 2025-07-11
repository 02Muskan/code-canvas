"use client"

import React from 'react';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';

const SendIcon = () => (
    <svg className="send-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
    </svg>
)

const DownloadIcon = () => (
    <svg className="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="currentColor" d="M13 10h5l-6 6-6-6h5V3h2v7zm-9 9h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7z" />
    </svg>
)

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: React.ReactNode;
  iconType: 'send' | 'download';
  href?: string;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, iconType, href, className, ...props }, ref) => {
    
    const icon = iconType === 'send' ? <SendIcon /> : <DownloadIcon />;
    
    const content = (
      <>
        <div className="svg-wrapper">
          {icon}
        </div>
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
