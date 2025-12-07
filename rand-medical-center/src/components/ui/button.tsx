import { forwardRef, ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "link";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      asChild = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles
          "relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          // Variants
          {
            // Primary - Gradient with glow
            "bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-[0_0_40px_rgba(20,184,166,0.4)] hover:-translate-y-0.5 active:translate-y-0":
              variant === "primary",
            // Secondary
            "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700":
              variant === "secondary",
            // Outline
            "border-2 border-teal-500 text-teal-600 bg-transparent hover:bg-teal-500 hover:text-white dark:text-teal-400 dark:hover:text-white":
              variant === "outline",
            // Ghost
            "text-slate-700 bg-transparent hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800":
              variant === "ghost",
            // Destructive
            "bg-red-500 text-white hover:bg-red-600":
              variant === "destructive",
            // Link
            "text-teal-600 underline-offset-4 hover:underline bg-transparent p-0 h-auto":
              variant === "link",
          },
          // Sizes
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
            "px-10 py-5 text-xl": size === "xl",
            "h-10 w-10 p-0": size === "icon",
          },
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
