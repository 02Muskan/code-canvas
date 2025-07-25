"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Button, ButtonProps } from "@/components/ui/button"

export function ThemeToggle(props: ButtonProps) {
  const { theme, setTheme } = useTheme()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTheme(theme === "light" ? "dark" : "light");
    if (props.onClick) {
      props.onClick(e);
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      {...props}
      onClick={handleClick}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
