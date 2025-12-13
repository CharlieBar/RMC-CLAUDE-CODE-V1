import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: "lift" | "glow" | "border" | "none";
  gradient?: boolean;
}

// Base Card
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = "none", gradient = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300",
        "dark:border-slate-800 dark:bg-slate-900",
        // Hover effects
        {
          "hover:-translate-y-1 hover:shadow-lg": hover === "lift",
          "hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]": hover === "glow",
          "hover:border-teal-300 dark:hover:border-teal-700": hover === "border",
        },
        // Gradient border effect
        gradient && "gradient-border",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

// Card Header
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

// Card Title
const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight font-display",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// Card Description
const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// Card Content
const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

// Card Footer
const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

// Interactive Card (for services, conditions, etc.)
interface InteractiveCardProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  accentPosition?: "top" | "left" | "none";
  glowOnHover?: boolean;
}

function InteractiveCard({
  className,
  href,
  children,
  accentPosition = "top",
  glowOnHover = false,
}: InteractiveCardProps) {
  const cardClasses = cn(
    "group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
    "transition-all duration-300 ease-out",
    "hover:-translate-y-1 hover:shadow-xl hover:border-teal-200",
    "dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-800",
    // Icon animation
    "[&_svg]:transition-all [&_svg]:duration-200",
    "hover:[&_.icon-animate]:scale-110 hover:[&_.icon-animate]:-translate-y-0.5",
    // Glow effect
    glowOnHover && "hover:shadow-[0_0_30px_rgba(20,184,166,0.12)]",
    href && "cursor-pointer",
    className
  );

  const content = (
    <>
      {/* Top accent line on hover */}
      {accentPosition === "top" && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-t-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      )}
      {/* Left accent line on hover */}
      {accentPosition === "left" && (
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 to-teal-400 rounded-l-2xl transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cardClasses}>
        {content}
      </a>
    );
  }

  return (
    <div className={cardClasses}>
      {content}
    </div>
  );
}

// Glass Card (for dark backgrounds)
interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = true, glow = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6",
        "transition-all duration-300 ease-out",
        // Hover effects
        hover && "hover:bg-white/[0.08] hover:border-teal-500/30 hover:-translate-y-0.5",
        // Glow effect
        glow && "hover:shadow-[0_0_40px_rgba(20,184,166,0.2)]",
        className
      )}
      {...props}
    />
  )
);
GlassCard.displayName = "GlassCard";

// Feature Card (icon-centric card for features/benefits)
interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon, title, description, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group relative p-6 rounded-2xl bg-white border border-slate-200",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-lg hover:border-teal-200",
        "dark:bg-slate-900 dark:border-slate-800 dark:hover:border-teal-800",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 p-3 w-fit rounded-xl bg-teal-50 text-teal-600 transition-all duration-200 group-hover:bg-teal-100 group-hover:scale-110 dark:bg-teal-900/30 dark:text-teal-400">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-lg font-semibold text-slate-900 mb-2 transition-colors group-hover:text-teal-600 dark:text-white">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-slate-600 text-sm dark:text-slate-400">{description}</p>
      )}
      {children}
    </div>
  )
);
FeatureCard.displayName = "FeatureCard";

// Stat Card (for displaying statistics/metrics)
interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  value?: string | number;
  label?: string;
  icon?: React.ReactNode;
}

const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, value, label, icon, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative p-6 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/30",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="absolute top-4 right-4 opacity-20">{icon}</div>
      )}
      {value && (
        <div className="text-4xl font-bold font-display mb-2">{value}</div>
      )}
      {label && <div className="text-teal-100 text-sm font-medium">{label}</div>}
    </div>
  )
);
StatCard.displayName = "StatCard";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  InteractiveCard,
  GlassCard,
  FeatureCard,
  StatCard,
};
