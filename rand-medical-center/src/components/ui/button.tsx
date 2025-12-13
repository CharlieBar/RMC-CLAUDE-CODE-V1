import { forwardRef, ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "link";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
  isLoading?: boolean;
  asChild?: boolean;
  shine?: boolean;
  prominent?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      asChild = false,
      shine = false,
      prominent = false,
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
          "relative inline-flex items-center justify-center gap-2 font-semibold rounded-full",
          "transition-all duration-300 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          // Icon transition for children
          "[&>svg]:transition-transform [&>svg]:duration-200",
          // Variants
          {
            // Primary - Gradient with glow and shine
            "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md":
              variant === "primary",
            // Secondary - Subtle lift
            "bg-slate-100 text-slate-900 hover:bg-slate-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700":
              variant === "secondary",
            // Outline - Border glow
            "border-2 border-teal-500 text-teal-600 bg-transparent hover:bg-teal-500 hover:text-white hover:shadow-lg hover:shadow-teal-500/20 dark:text-teal-400 dark:hover:text-white":
              variant === "outline",
            // Ghost - Subtle background
            "text-slate-700 bg-transparent hover:bg-slate-100 active:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800":
              variant === "ghost",
            // Destructive - Red glow
            "bg-red-500 text-white shadow-lg shadow-red-500/25 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-0.5 active:translate-y-0":
              variant === "destructive",
            // Link - Underline animation
            "text-teal-600 underline-offset-4 hover:underline bg-transparent p-0 h-auto hover:text-teal-700":
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
          // Shine effect
          shine && "btn-shine overflow-hidden",
          // Prominent CTA glow
          prominent && "cta-prominent",
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
