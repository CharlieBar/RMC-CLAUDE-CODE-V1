import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// Base Card
const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300",
        "dark:border-slate-800 dark:bg-slate-900",
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
}

function InteractiveCard({ className, href, children }: InteractiveCardProps) {
  const cardClasses = cn(
    "group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
    "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-teal-200",
    "dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-800",
    href && "cursor-pointer",
    className
  );

  const content = (
    <>
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-t-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
const GlassCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6",
        "transition-all duration-300 hover:bg-white/[0.08] hover:border-teal-500/30",
        className
      )}
      {...props}
    />
  )
);
GlassCard.displayName = "GlassCard";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  InteractiveCard,
  GlassCard,
};
