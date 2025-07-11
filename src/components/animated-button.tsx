"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";

// --- ICONS ---
const SendIcon = () => (
  <svg className="send-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
    />
  </svg>
);

const DownloadIcon = () => (
  <svg className="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M13 10h5l-6 6-6-6h5V3h2v7zm-9 9h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7z"
    />
  </svg>
);

const EyeIcon = () => <Eye className="eye-icon" />;

// --- TYPE FIX ---
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  iconType: "send" | "download" | "eye";
  href?: undefined; // Button version
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  iconType: "send" | "download" | "eye";
  href: string; // Link version
};

type AnimatedButtonProps = ButtonProps | AnchorProps;

// --- COMPONENT ---
const AnimatedButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, AnimatedButtonProps>(
  ({ children, iconType, href, className, ...props }, ref) => {
    const iconMap = {
      send: <SendIcon />,
      download: <DownloadIcon />,
      eye: <EyeIcon />,
    };

    const icon = iconMap[iconType];

    const content = (
      <>
        <div className="svg-wrapper">{icon}</div>
        <span>{children}</span>
      </>
    );

    if (href) {
      // Anchor
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cn("animated-button", className)}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    // Button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn("animated-button", className)}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
